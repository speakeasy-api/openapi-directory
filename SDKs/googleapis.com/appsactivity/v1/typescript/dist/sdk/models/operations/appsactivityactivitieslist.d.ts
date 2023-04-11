import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsactivityActivitiesListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Indicates the strategy to use when grouping singleEvents items in the associated combinedEvent object.
 */
export declare enum AppsactivityActivitiesListGroupingStrategyEnum {
    DriveUi = "driveUi",
    None = "none"
}
export declare class AppsactivityActivitiesListRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Identifies the Drive folder containing the items for which to return activities.
     */
    driveAncestorId?: string;
    /**
     * Identifies the Drive item to return activities for.
     */
    driveFileId?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Indicates the strategy to use when grouping singleEvents items in the associated combinedEvent object.
     */
    groupingStrategy?: AppsactivityActivitiesListGroupingStrategyEnum;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The maximum number of events to return on a page. The response includes a continuation token if there are more events.
     */
    pageSize?: number;
    /**
     * A token to retrieve a specific page of results.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The Google service from which to return activities. Possible values of source are:
     *
     * @remarks
     * - drive.google.com
     */
    source?: string;
    /**
     * The ID used for ACL checks (does not filter the resulting event list by the assigned value). Use the special value me to indicate the currently authenticated user.
     */
    userId?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class AppsactivityActivitiesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listActivitiesResponse?: shared.ListActivitiesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
