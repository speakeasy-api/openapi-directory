import { BoundingBox } from "./boundingbox";
import { Create } from "./create";
import { Feature } from "./feature";
import { Info } from "./info";
import { Parts } from "./parts";
import { Point } from "./point";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://apps.gov.bc.ca/pub/geomark", "https://test.apps.gov.bc.ca/pub/geomark", "https://delivery.apps.gov.bc.ca/pub/geomark"];
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
 * The Geomark Web Service allows you to create and share geographic areas of interest over the web in a variety of formats and coordinate systems. This service is especially helpful when you need to share an area of interest with people who require that the data be in a different format, or they use different mapping software.
 *
 * @remarks
 *
 * Please note that you may experience issues when submitting requests to the delivery or test environment if using this [OpenAPI specification](https://github.com/bcgov/api-specs/tree/master/geomark) in other API console viewers.
 *
 * @see {@link https://www2.gov.bc.ca/gov/content?id=F6BAF45131954020BCFD2EBCC456F084} - Geomark Web Service
 */
export declare class SDK {
    boundingBox: BoundingBox;
    create: Create;
    feature: Feature;
    info: Info;
    parts: Parts;
    point: Point;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
