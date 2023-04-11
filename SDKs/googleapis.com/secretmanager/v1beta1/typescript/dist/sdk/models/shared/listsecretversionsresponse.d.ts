import { SpeakeasyBase } from "../../../internal/utils";
import { SecretVersion } from "./secretversion";
/**
 * Response message for SecretManagerService.ListSecretVersions.
 */
export declare class ListSecretVersionsResponse extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results. Pass this value in ListSecretVersionsRequest.page_token to retrieve the next page.
     */
    nextPageToken?: string;
    /**
     * The total number of SecretVersions.
     */
    totalSize?: number;
    /**
     * The list of SecretVersions sorted in reverse by create_time (newest first).
     */
    versions?: SecretVersion[];
}
