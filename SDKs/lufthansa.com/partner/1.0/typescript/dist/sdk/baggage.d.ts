import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Baggage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Baggage Trip and Contact
     *
     * @remarks
     * Retrieve passenger trip, contact and baggage details. This service is only accessible for LH privileged partners
     */
    baggageTripAndContact(req: operations.BaggageTripAndContactRequest, security: operations.BaggageTripAndContactSecurity, config?: AxiosRequestConfig): Promise<operations.BaggageTripAndContactResponse>;
}
