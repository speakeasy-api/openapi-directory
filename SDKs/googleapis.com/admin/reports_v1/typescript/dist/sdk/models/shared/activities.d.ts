import { SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";
/**
 * JSON template for a collection of activities.
 */
export declare class Activities extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * Each activity record in the response.
     */
    items?: Activity[];
    /**
     * The type of API resource. For an activity report, the value is `reports#activities`.
     */
    kind?: string;
    /**
     * Token for retrieving the follow-on next page of the report. The `nextPageToken` value is used in the request's `pageToken` query string.
     */
    nextPageToken?: string;
}
