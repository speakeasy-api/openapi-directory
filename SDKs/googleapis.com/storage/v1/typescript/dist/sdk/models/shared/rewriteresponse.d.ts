import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectT } from "./object";
/**
 * A rewrite response.
 */
export declare class RewriteResponse extends SpeakeasyBase {
    /**
     * true if the copy is finished; otherwise, false if the copy is in progress. This property is always present in the response.
     */
    done?: boolean;
    /**
     * The kind of item this is.
     */
    kind?: string;
    /**
     * The total size of the object being copied in bytes. This property is always present in the response.
     */
    objectSize?: string;
    /**
     * An object.
     */
    resource?: ObjectT;
    /**
     * A token to use in subsequent requests to continue copying data. This token is present in the response only when there is more data to copy.
     */
    rewriteToken?: string;
    /**
     * The total bytes written so far, which can be used to provide a waiting user with a progress indicator. This property is always present in the response.
     */
    totalBytesRewritten?: string;
}
