import { Intersections } from "./intersections";
import * as shared from "./models/shared";
import { Occupants } from "./occupants";
import { Parcels } from "./parcels";
import { Sites } from "./sites";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://geocoder.api.gov.bc.ca/", "https://geocodertst.api.gov.bc.ca/", "https://geocoderdlv.api.gov.bc.ca/"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * This API represents address cleaning, correction, completion, geocoding, reverse geocoding, and proximity resources for intersection addresses, physical addresses and their occupants in British Columbia. Please read our [data collection notice](https://github.com/bcgov/api-specs/blob/master/COLLECTION_NOTICE.md#collection-notice).
 *
 * @remarks
 *
 * Please note that you may experience issues when submitting requests to the delivery or test environment if using this [OpenAPI specification](https://github.com/bcgov/api-specs) in other API console viewers.
 *
 * [API keys](https://api.gov.bc.ca/devportal/api-directory/273) are unique and can be acquired with a GitHub or IDIR account.
 *
 *  **Notification:** If you have applications or web pages that link to the BC Address Geocoder you must use the following URL.
 *
 *  *https://geocoder.api.gov.bc.ca*
 *
 *  Please note that the following URLs were deprecated in September 2018 [More Details](https://www2.gov.bc.ca/gov/content?id=103ADC5A956842828554238DEF28D6E5).
 *
 *  - http://apps.gov.bc.ca/pub/geocoder
 *  - https://apps.gov.bc.ca/pub/geocoder
 * \
 * \
 *
 *
 * @see {@link https://www2.gov.bc.ca/gov/content?id=118DD57CD9674D57BDBD511C2E78DC0D} - BC Address Geocoder
 */
export declare class SDK {
    intersections: Intersections;
    occupants: Occupants;
    parcels: Parcels;
    sites: Sites;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
