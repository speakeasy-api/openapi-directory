import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Countries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Payment Channel Country Rules
     *
     * @remarks
     * List the country specific payment channel rules.
     */
    listPaymentChannelRulesV1(config?: AxiosRequestConfig): Promise<operations.ListPaymentChannelRulesV1Response>;
    /**
     * List Supported Countries
     *
     * @remarks
     * <p>List the supported countries.</p>
     * <p>This version will be retired in March 2020. Use /v2/supportedCountries</p>
     *
     */
    listSupportedCountriesV1(config?: AxiosRequestConfig): Promise<operations.ListSupportedCountriesV1Response>;
    /**
     * List Supported Countries
     *
     * @remarks
     * List the supported countries.
     */
    listSupportedCountriesV2(config?: AxiosRequestConfig): Promise<operations.ListSupportedCountriesV2Response>;
}
