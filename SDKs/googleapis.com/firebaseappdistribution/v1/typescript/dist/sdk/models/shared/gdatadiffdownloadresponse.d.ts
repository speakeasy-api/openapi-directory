import { SpeakeasyBase } from "../../../internal/utils";
import { GdataCompositeMedia } from "./gdatacompositemedia";
/**
 * Backend response for a Diff download response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
 */
export declare class GdataDiffDownloadResponse extends SpeakeasyBase {
    /**
     * A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites.
     */
    objectLocation?: GdataCompositeMedia;
}
