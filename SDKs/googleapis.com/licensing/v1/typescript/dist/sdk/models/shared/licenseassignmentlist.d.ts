import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseAssignment } from "./licenseassignment";
/**
 * Successful response
 */
export declare class LicenseAssignmentList extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * The LicenseAssignments in this page of results.
     */
    items?: LicenseAssignment[];
    /**
     * Identifies the resource as a collection of LicenseAssignments.
     */
    kind?: string;
    /**
     * The token that you must submit in a subsequent request to retrieve additional license results matching your query parameters. The `maxResults` query string is related to the `nextPageToken` since `maxResults` determines how many entries are returned on each next page.
     */
    nextPageToken?: string;
}
