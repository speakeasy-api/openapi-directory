import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Backend response for a Diff get version response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
 */
export declare class GdataDiffVersionResponse extends SpeakeasyBase {
    /**
     * The total size of the server object.
     */
    objectSizeBytes?: string;
    /**
     * The version of the object stored at the server.
     */
    objectVersion?: string;
}
