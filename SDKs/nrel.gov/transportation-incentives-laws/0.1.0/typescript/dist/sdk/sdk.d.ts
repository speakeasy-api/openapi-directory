import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://nrel.gov/api/transportation-incentives-laws"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * getV1CategoryListOutputFormat - Return the law categories for a given category type.
    **/
    getV1CategoryListOutputFormat(req: operations.GetV1CategoryListOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetV1CategoryListOutputFormatResponse>;
    /**
     * getV1PocsOutputFormat - Get the points of contact for a given jurisdiction.
    **/
    getV1PocsOutputFormat(req: operations.GetV1PocsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetV1PocsOutputFormatResponse>;
    /**
     * getV1IdOutputFormat - Fetch the details of a specific law given the law's ID.
    **/
    getV1IdOutputFormat(req: operations.GetV1IdOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetV1IdOutputFormatResponse>;
    /**
     * transportationIncentivesLaws - Return a full list of laws and incentives that match your query.
    **/
    transportationIncentivesLaws(req: operations.TransportationIncentivesLawsRequest, config?: AxiosRequestConfig): Promise<operations.TransportationIncentivesLawsResponse>;
}
