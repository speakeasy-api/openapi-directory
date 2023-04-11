import { SpeakeasyBase } from "../../../internal/utils";
import { GdataCompositeMedia } from "./gdatacompositemedia";
/**
 * Backend response for a Diff get checksums response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
 */
export declare class GdataDiffChecksumsResponse extends SpeakeasyBase {
    /**
     * A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites.
     */
    checksumsLocation?: GdataCompositeMedia;
    /**
     * The chunk size of checksums. Must be a multiple of 256KB.
     */
    chunkSizeBytes?: string;
    /**
     * A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites.
     */
    objectLocation?: GdataCompositeMedia;
    /**
     * The total size of the server object.
     */
    objectSizeBytes?: string;
    /**
     * The object version of the object the checksums are being returned for.
     */
    objectVersion?: string;
}
