import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Confirmation of Funds Service (PIIS) returns a confirmation of funds request at the ASPSP.
 *
 * @remarks
 *
 */
export declare class ConfirmationOfFundsServicePIIS {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Confirmation of funds request
     *
     * @remarks
     * Creates a confirmation of funds request at the ASPSP. Checks whether a specific amount is available at point of time of the request on an account linked to a given tuple card issuer(TPP)/card number, or addressed by IBAN and TPP respectively.
     * If the related extended services are used a conditional Consent-ID is contained in the header. This field is contained but commented out in this specification.
     */
    checkAvailabilityOfFunds(req: operations.CheckAvailabilityOfFundsRequest, security: operations.CheckAvailabilityOfFundsSecurity, config?: AxiosRequestConfig): Promise<operations.CheckAvailabilityOfFundsResponse>;
}
