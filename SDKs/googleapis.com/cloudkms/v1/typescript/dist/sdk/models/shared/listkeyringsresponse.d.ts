import { SpeakeasyBase } from "../../../internal/utils";
import { KeyRing } from "./keyring";
/**
 * Response message for KeyManagementService.ListKeyRings.
 */
export declare class ListKeyRingsResponse extends SpeakeasyBase {
    /**
     * The list of KeyRings.
     */
    keyRings?: KeyRing[];
    /**
     * A token to retrieve next page of results. Pass this value in ListKeyRingsRequest.page_token to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The total number of KeyRings that matched the query.
     */
    totalSize?: number;
}
