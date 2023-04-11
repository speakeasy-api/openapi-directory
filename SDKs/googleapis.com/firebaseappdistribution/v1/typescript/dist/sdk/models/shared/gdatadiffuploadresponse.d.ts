import { SpeakeasyBase } from "../../../internal/utils";
import { GdataCompositeMedia } from "./gdatacompositemedia";
/**
 * Backend response for a Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
 */
export declare class GdataDiffUploadResponse extends SpeakeasyBase {
    /**
     * The object version of the object at the server. Must be included in the end notification response. The version in the end notification response must correspond to the new version of the object that is now stored at the server, after the upload.
     */
    objectVersion?: string;
    /**
     * A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites.
     */
    originalObject?: GdataCompositeMedia;
}
