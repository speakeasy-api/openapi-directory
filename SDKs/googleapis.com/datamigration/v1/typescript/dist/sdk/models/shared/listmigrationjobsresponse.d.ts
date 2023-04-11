import { SpeakeasyBase } from "../../../internal/utils";
import { MigrationJob } from "./migrationjob";
/**
 * Response message for 'ListMigrationJobs' request.
 */
export declare class ListMigrationJobsResponse extends SpeakeasyBase {
    /**
     * The list of migration jobs objects.
     */
    migrationJobs?: MigrationJob[];
    /**
     * A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
