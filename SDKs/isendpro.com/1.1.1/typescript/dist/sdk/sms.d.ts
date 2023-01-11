import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sms {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * sendSms - Envoyer un sms
     *
     * Envoi un sms vers un unique destinataire
    **/
    sendSms(req: operations.SendSmsRequest, config?: AxiosRequestConfig): Promise<operations.SendSmsResponse>;
    /**
     * sendSmsMulti - Envoyer des SMS
     *
     * Envoi de SMS vers 1 ou plusieurs destinataires
     *
    **/
    sendSmsMulti(req: operations.SendSmsMultiRequest, config?: AxiosRequestConfig): Promise<operations.SendSmsMultiResponse>;
}
