import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Payment {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete credit card
     */
    deleteCreditCard(req: operations.DeleteCreditCardRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCreditCardResponse>;
    /**
     * View saved credit card
     */
    getCreditCard(req: operations.GetCreditCardRequest, config?: AxiosRequestConfig): Promise<operations.GetCreditCardResponse>;
    /**
     * Reset credit card payment code
     *
     * @remarks
     * Reset the payment code used to bypass credit card payment. This will invalidate your current payment code and your users should be aware of this change while ordering translations.
     */
    resetCardPaymentCode(req: operations.ResetCardPaymentCodeRequest, config?: AxiosRequestConfig): Promise<operations.ResetCardPaymentCodeResponse>;
    /**
     * Reset payment code
     *
     * @remarks
     * Reset your corporate account's payment code to bypass credit card payment. This will invalidate your current payment code and your users should be aware of this change while ordering translations.
     */
    resetCorporatePaymentCode(config?: AxiosRequestConfig): Promise<operations.ResetCorporatePaymentCodeResponse>;
    /**
     * Manage automatic charges on your credit card
     *
     * @remarks
     * Toggle (enable/disable) automatic charges on the credit card on file.
     */
    toggleCorporateAutoCharge(config?: AxiosRequestConfig): Promise<operations.ToggleCorporateAutoChargeResponse>;
}
