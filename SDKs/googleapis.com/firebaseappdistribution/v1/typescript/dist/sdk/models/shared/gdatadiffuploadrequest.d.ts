import { SpeakeasyBase } from "../../../internal/utils";
import { GdataCompositeMedia } from "./gdatacompositemedia";
/**
 * A Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
 */
export declare class GdataDiffUploadRequest extends SpeakeasyBase {
    /**
     * A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites.
     */
    checksumsInfo?: GdataCompositeMedia;
    /**
     * A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites.
     */
    objectInfo?: GdataCompositeMedia;
    /**
     * The object version of the object that is the base version the incoming diff script will be applied to. This field will always be filled in.
     */
    objectVersion?: string;
}
