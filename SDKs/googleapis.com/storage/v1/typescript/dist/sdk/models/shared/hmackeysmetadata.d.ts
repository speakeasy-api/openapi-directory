import { SpeakeasyBase } from "../../../internal/utils";
import { HmacKeyMetadata } from "./hmackeymetadata";
/**
 * A list of hmacKeys.
 */
export declare class HmacKeysMetadata extends SpeakeasyBase {
    /**
     * The list of items.
     */
    items?: HmacKeyMetadata[];
    /**
     * The kind of item this is. For lists of hmacKeys, this is always storage#hmacKeysMetadata.
     */
    kind?: string;
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string;
}
