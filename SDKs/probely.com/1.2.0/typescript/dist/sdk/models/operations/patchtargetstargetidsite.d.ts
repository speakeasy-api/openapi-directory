import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchTargetsTargetIdSiteRequest extends SpeakeasyBase {
    siteInput: shared.SiteInput;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class PatchTargetsTargetIdSite404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PatchTargetsTargetIdSite403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PatchTargetsTargetIdSite401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PatchTargetsTargetIdSite400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PatchTargetsTargetIdSiteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Site object
     */
    site?: shared.Site;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    patchTargetsTargetIdSite400ApplicationJSONObject?: PatchTargetsTargetIdSite400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    patchTargetsTargetIdSite401ApplicationJSONObject?: PatchTargetsTargetIdSite401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    patchTargetsTargetIdSite403ApplicationJSONObject?: PatchTargetsTargetIdSite403ApplicationJSON;
    /**
     * Not found
     */
    patchTargetsTargetIdSite404ApplicationJSONObject?: PatchTargetsTargetIdSite404ApplicationJSON;
}
