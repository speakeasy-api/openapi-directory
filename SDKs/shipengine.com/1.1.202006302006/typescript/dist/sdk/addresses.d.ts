import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Addresses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * parseAddress - Parse an address
     *
     * The address-recognition API makes it easy for you to extract address data from unstructured text, including the recipient name, line 1, line 2, city, postal code, and more.
     *
     * Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine's address-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed address data is returned in the same structure that's used for other ShipEngine APIs, such as address validation, rate quotes, and shipping labels.
     *
     * > **Note:** Address recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland.
     *
    **/
    parseAddress(req: operations.ParseAddressRequest, config?: AxiosRequestConfig): Promise<operations.ParseAddressResponse>;
    /**
     * validateAddress - Validate An Address
     *
     * Address validation ensures accurate addresses and can lead to reduced shipping costs by preventing address correction surcharges.
     * ShipEngine cross references multiple databases to validate addresses and identify potential deliverability issues.
     *
    **/
    validateAddress(req: operations.ValidateAddressRequest, config?: AxiosRequestConfig): Promise<operations.ValidateAddressResponse>;
}
