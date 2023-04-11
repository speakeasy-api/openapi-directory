import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Conversion {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves a list of conversions from a DoubleClick Search engine account.
     */
    doubleclicksearchConversionGet(req: operations.DoubleclicksearchConversionGetRequest, security: operations.DoubleclicksearchConversionGetSecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclicksearchConversionGetResponse>;
    /**
     * Retrieves a list of conversions from a DoubleClick Search engine account.
     */
    doubleclicksearchConversionGetByCustomerId(req: operations.DoubleclicksearchConversionGetByCustomerIdRequest, security: operations.DoubleclicksearchConversionGetByCustomerIdSecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclicksearchConversionGetByCustomerIdResponse>;
    /**
     * Inserts a batch of new conversions into DoubleClick Search.
     */
    doubleclicksearchConversionInsert(req: operations.DoubleclicksearchConversionInsertRequest, security: operations.DoubleclicksearchConversionInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclicksearchConversionInsertResponse>;
    /**
     * Updates a batch of conversions in DoubleClick Search.
     */
    doubleclicksearchConversionUpdate(req: operations.DoubleclicksearchConversionUpdateRequest, security: operations.DoubleclicksearchConversionUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclicksearchConversionUpdateResponse>;
    /**
     * Updates the availabilities of a batch of floodlight activities in DoubleClick Search.
     */
    doubleclicksearchConversionUpdateAvailability(req: operations.DoubleclicksearchConversionUpdateAvailabilityRequest, security: operations.DoubleclicksearchConversionUpdateAvailabilitySecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclicksearchConversionUpdateAvailabilityResponse>;
}
