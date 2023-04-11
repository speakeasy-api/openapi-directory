import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PayoutsAPI {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Verify payout
     *
     * @remarks
     * This method is required to verify payouts by using your 2fa code.
     * You’ll have 10 attempts to verify the payout. If it is not verified after 10 attempts, the payout will remain in ‘creating’ status.
     * Payout will be processed only when it is verified.
     *
     * Make sure to have your 2fa authentication enabled in your NOWPayments Account (in Account Settings).
     * When 2fa is disabled, the code automatically goes to your registration email.
     * The code sent by email is valid for one hour.
     *
     * Next is a description of the required request fields:
     *
     * - :batch-withdrawal-id - payout id you received in `2. Create payout` method
     * - verification_code - 2fa code you received with your Google Auth app or via email
     *
     *
     * In order to establish an automatic verification of payouts, you should switch 2FA through the application.
     * There are several libraries for different frameworks aimed on generating a 2FA codes based on a secret key from your account settings.
     * e.g: Speakeasy for JavaScript.
     * We do not recommend to change any default settings.
     *
     * ```
     * const 2faVerificationCode = speakeasy.totp({
     *       your_2fa_secret_key,
     *       encoding: 'base32',
     * })
     * ```
     */
    verifyPayout(req: operations.VerifyPayoutRequest, config?: AxiosRequestConfig): Promise<operations.VerifyPayoutResponse>;
}
