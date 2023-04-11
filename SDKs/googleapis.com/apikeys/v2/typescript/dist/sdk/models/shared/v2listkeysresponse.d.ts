import { SpeakeasyBase } from "../../../internal/utils";
import { V2Key } from "./v2key";
/**
 * Response message for `ListKeys` method.
 */
export declare class V2ListKeysResponse extends SpeakeasyBase {
    /**
     * A list of API keys.
     */
    keys?: V2Key[];
    /**
     * The pagination token for the next page of results.
     */
    nextPageToken?: string;
}
