import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdSiteRequest extends SpeakeasyBase {
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class GetTargetsTargetIdSite404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdSite401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdSiteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Site object
     */
    site?: shared.Site;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdSite401ApplicationJSONObject?: GetTargetsTargetIdSite401ApplicationJSON;
    /**
     * Not found
     */
    getTargetsTargetIdSite404ApplicationJSONObject?: GetTargetsTargetIdSite404ApplicationJSON;
}
