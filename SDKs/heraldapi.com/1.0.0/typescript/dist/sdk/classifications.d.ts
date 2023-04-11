import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Classifications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * /classifications/naics_index_entries
     *
     * @remarks
     * ### Get a list of [classifications](https://www.heraldapi.com/docs/classifications) to classify an applicant
     *
     * Returns an array of classifications, specific to the industries defined by NAICS. Can query by classification description or NAICS code to refine the list.
     *
     * Read more on [getting classifications](https://www.heraldapi.com/docs/getting-classifications).
     */
    getClassifications(req: operations.GetClassificationsRequest, config?: AxiosRequestConfig): Promise<operations.GetClassificationsResponse>;
}
