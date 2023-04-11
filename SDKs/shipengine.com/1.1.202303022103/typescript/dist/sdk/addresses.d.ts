import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * No matter your shipping volume, failed deliveries and address change surcharges cut into your bottom line and damage perception with customers. Our address validation services ensure your packages make it to the right place the first time. [Learn how to leverage our address validation services here.](https://www.shipengine.com/docs/addresses/validation/)
 *
 * @remarks
 *
 * ShipEngine supports address validation for virtually every country on Earth, including the United States, Canada, Great Britain, Australia, Germany, France, Norway, Spain, Sweden, Israel, Italy, and over 160 others.
 *
 *
 * @see {@link https://www.shipengine.com/docs/addresses/validation/} - Address validation ensures accurate addresses and can lead to reduced shipping costs by preventing address correction surcharges. ShipEngine cross references multiple databases to validate addresses and identify potential deliverability issues.
 *
 */
export declare class Addresses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Parse an address
     *
     * @remarks
     * The address-recognition API makes it easy for you to extract address data from unstructured text, including the recipient name, line 1, line 2, city, postal code, and more.
     *
     * Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine's address-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed address data is returned in the same structure that's used for other ShipEngine APIs, such as address validation, rate quotes, and shipping labels.
     *
     * > **Note:** Address recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland.
     *
     */
    parseAddress(req: shared.ParseAddressRequestBody, config?: AxiosRequestConfig): Promise<operations.ParseAddressResponse>;
    /**
     * Validate An Address
     *
     * @remarks
     * Address validation ensures accurate addresses and can lead to reduced shipping costs by preventing address correction surcharges.
     * ShipEngine cross references multiple databases to validate addresses and identify potential deliverability issues.
     *
     */
    validateAddress(req: shared.AddressToValidate[], config?: AxiosRequestConfig): Promise<operations.ValidateAddressResponse>;
}
