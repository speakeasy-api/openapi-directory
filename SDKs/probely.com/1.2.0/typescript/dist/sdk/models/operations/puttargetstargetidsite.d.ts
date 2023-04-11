import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutTargetsTargetIdSiteRequest extends SpeakeasyBase {
    siteInput: shared.SiteInput;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class PutTargetsTargetIdSite404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PutTargetsTargetIdSite403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PutTargetsTargetIdSite401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PutTargetsTargetIdSite400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PutTargetsTargetIdSiteResponse extends SpeakeasyBase {
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
    putTargetsTargetIdSite400ApplicationJSONObject?: PutTargetsTargetIdSite400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    putTargetsTargetIdSite401ApplicationJSONObject?: PutTargetsTargetIdSite401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    putTargetsTargetIdSite403ApplicationJSONObject?: PutTargetsTargetIdSite403ApplicationJSON;
    /**
     * Not found
     */
    putTargetsTargetIdSite404ApplicationJSONObject?: PutTargetsTargetIdSite404ApplicationJSON;
}
