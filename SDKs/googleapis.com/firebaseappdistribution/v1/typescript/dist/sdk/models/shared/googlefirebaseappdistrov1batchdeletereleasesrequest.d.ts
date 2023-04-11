import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for `BatchDeleteReleases`.
 */
export declare class GoogleFirebaseAppdistroV1BatchDeleteReleasesRequest extends SpeakeasyBase {
    /**
     * Required. The names of the release resources to delete. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}` A maximum of 100 releases can be deleted per request.
     */
    names?: string[];
}
