import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to download user account in batch.
 */
export declare class IdentitytoolkitRelyingpartyDownloadAccountRequest extends SpeakeasyBase {
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string;
    /**
     * The max number of results to return in the response.
     */
    maxResults?: number;
    /**
     * The token for the next page. This should be taken from the previous response.
     */
    nextPageToken?: string;
    /**
     * Specify which project (field value is actually project id) to operate. Only used when provided credential.
     */
    targetProjectId?: string;
}
