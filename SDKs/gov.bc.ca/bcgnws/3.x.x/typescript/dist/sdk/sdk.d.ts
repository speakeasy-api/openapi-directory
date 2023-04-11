import { Feature } from "./feature";
import { FeatureTaxonomy } from "./featuretaxonomy";
import { Name } from "./name";
import { NameAuthority } from "./nameauthority";
import { Search } from "./search";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://apps.gov.bc.ca/pub/bcgnws", "https://test.apps.gov.bc.ca/pub/bcgnws", "https://delivery.apps.gov.bc.ca/pub/bcgnws"];
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
 * This REST API provides searchable access to information about geographical names in the province of British Columbia, including name status and details about the corresponding geographic feature.
 *
 * @remarks
 *
 * Please note that you may experience issues when submitting requests to the delivery or test environment if using this [OpenAPI specification](https://github.com/bcgov/api-specs) in other API console viewers.
 */
export declare class SDK {
    feature: Feature;
    featureTaxonomy: FeatureTaxonomy;
    name: Name;
    nameAuthority: NameAuthority;
    search: Search;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
