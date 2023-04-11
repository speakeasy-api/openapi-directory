import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["//www.ticketmaster.com/publish/v2"];
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
 * Publish API
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
     * Publish a patch on an attraction
     *
     * @remarks
     * Since 1.0.0
     */
    patchAttraction(req: operations.PatchAttractionRequest, config?: AxiosRequestConfig): Promise<operations.PatchAttractionResponse>;
    /**
     * Publish a patch on an event
     *
     * @remarks
     * Since 1.0.0
     */
    patchEvent(req: operations.PatchEventRequest, config?: AxiosRequestConfig): Promise<operations.PatchEventResponse>;
    /**
     * Publish a patch on a venue
     *
     * @remarks
     * Since 1.0.0
     */
    patchVenue(req: operations.PatchVenueRequest, config?: AxiosRequestConfig): Promise<operations.PatchVenueResponse>;
    /**
     * Publish an attractions
     *
     * @remarks
     * Since 1.0.0
     */
    publishAttraction(req: operations.PublishAttractionRequest, config?: AxiosRequestConfig): Promise<operations.PublishAttractionResponse>;
    /**
     * Publish a video on an attraction
     *
     * @remarks
     * Since 1.0.0
     */
    publishAttractionVideos(req: operations.PublishAttractionVideosRequest, config?: AxiosRequestConfig): Promise<operations.PublishAttractionVideosResponse>;
    /**
     * Publish entitlements on an entity
     *
     * @remarks
     * Since 2.0.0
     */
    publishEntitlements(req: operations.PublishEntitlementsRequest, config?: AxiosRequestConfig): Promise<operations.PublishEntitlementsResponse>;
    /**
     * Publish an event
     *
     * @remarks
     * Since 1.0.0
     */
    publishEvent(req: operations.PublishEventRequest, config?: AxiosRequestConfig): Promise<operations.PublishEventResponse>;
    /**
     * Publish a video on an event
     *
     * @remarks
     * Since 1.0.0
     */
    publishEventVideos(req: operations.PublishEventVideosRequest, config?: AxiosRequestConfig): Promise<operations.PublishEventVideosResponse>;
    /**
     * Publish extension on an entity
     *
     * @remarks
     * Since 1.0.0
     */
    publishExtension(req: operations.PublishExtensionRequest, config?: AxiosRequestConfig): Promise<operations.PublishExtensionResponse>;
    /**
     * Publish a venue
     *
     * @remarks
     * Since 1.0.0
     */
    publishVenue(req: operations.PublishVenueRequest, config?: AxiosRequestConfig): Promise<operations.PublishVenueResponse>;
}
