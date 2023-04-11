import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Sms {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Envoyer un sms
     *
     * @remarks
     * Envoi un sms vers un unique destinataire
     */
    sendSms(req: shared.SmsUniqueRequest, config?: AxiosRequestConfig): Promise<operations.SendSmsResponse>;
    /**
     * Envoyer des SMS
     *
     * @remarks
     * Envoi de SMS vers 1 ou plusieurs destinataires
     *
     */
    sendSmsMulti(req: shared.SMSRequest, config?: AxiosRequestConfig): Promise<operations.SendSmsMultiResponse>;
}
