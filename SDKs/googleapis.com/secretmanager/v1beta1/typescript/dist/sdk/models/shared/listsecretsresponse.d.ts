import { SpeakeasyBase } from "../../../internal/utils";
import { Secret } from "./secret";
/**
 * Response message for SecretManagerService.ListSecrets.
 */
export declare class ListSecretsResponse extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results. Pass this value in ListSecretsRequest.page_token to retrieve the next page.
     */
    nextPageToken?: string;
    /**
     * The list of Secrets sorted in reverse by create_time (newest first).
     */
    secrets?: Secret[];
    /**
     * The total number of Secrets.
     */
    totalSize?: number;
}
