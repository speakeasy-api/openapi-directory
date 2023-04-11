import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["/api/transportation-incentives-laws"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Query our database of federal and state laws and incentives for alternative fuels and vehicles, air quality, fuel efficiency, and other transportation-related topics. This dataset powers the <a href="https://afdc.energy.gov/laws">Federal and State Laws and Incentives</a> on the Alternative Fuels Data Center.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Return a full list of laws and incentives that match your query.
     */
    transportationIncentivesLawsAll(req: operations.TransportationIncentivesLawsAllRequest, config?: AxiosRequestConfig): Promise<operations.TransportationIncentivesLawsAllResponse>;
    /**
     * Return the law categories for a given category type.
     */
    transportationIncentivesLawsCategories(req: operations.TransportationIncentivesLawsCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.TransportationIncentivesLawsCategoriesResponse>;
    /**
     * Fetch the details of a specific law given the law's ID.
     */
    transportationIncentivesLawsId(req: operations.TransportationIncentivesLawsIdRequest, config?: AxiosRequestConfig): Promise<operations.TransportationIncentivesLawsIdResponse>;
    /**
     * Get the points of contact for a given jurisdiction.
     */
    transportationIncentivesLawsPocs(req: operations.TransportationIncentivesLawsPocsRequest, config?: AxiosRequestConfig): Promise<operations.TransportationIncentivesLawsPocsResponse>;
}
