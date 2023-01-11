import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Countries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * listPaymentChannelRulesV1 - List Payment Channel Country Rules
     *
     * List the country specific payment channel rules.
    **/
    listPaymentChannelRulesV1(config?: AxiosRequestConfig): Promise<operations.ListPaymentChannelRulesV1Response>;
    /**
     * listSupportedCountriesV1 - List Supported Countries
     *
     * <p>List the supported countries.</p>
     * <p>This version will be retired in March 2020. Use /v2/supportedCountries</p>
     *
    **/
    listSupportedCountriesV1(config?: AxiosRequestConfig): Promise<operations.ListSupportedCountriesV1Response>;
    /**
     * listSupportedCountriesV2 - List Supported Countries
     *
     * List the supported countries.
    **/
    listSupportedCountriesV2(config?: AxiosRequestConfig): Promise<operations.ListSupportedCountriesV2Response>;
}
