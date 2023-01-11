import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Payment {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteCreditCard - Delete credit card.
    **/
    deleteCreditCard(req: operations.DeleteCreditCardRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCreditCardResponse>;
    /**
     * getCreditCard - Get credit card by cardId
    **/
    getCreditCard(req: operations.GetCreditCardRequest, config?: AxiosRequestConfig): Promise<operations.GetCreditCardResponse>;
    /**
     * resetCardPaymentCode - Reset credit card payment code.
    **/
    resetCardPaymentCode(req: operations.ResetCardPaymentCodeRequest, config?: AxiosRequestConfig): Promise<operations.ResetCardPaymentCodeResponse>;
    /**
     * resetCorporatePaymentCode - Reset corporate credit card payment code.
    **/
    resetCorporatePaymentCode(config?: AxiosRequestConfig): Promise<operations.ResetCorporatePaymentCodeResponse>;
    /**
     * toggleCorporateAutoCharge - Toggle corporate auto charge option.
    **/
    toggleCorporateAutoCharge(config?: AxiosRequestConfig): Promise<operations.ToggleCorporateAutoChargeResponse>;
}
