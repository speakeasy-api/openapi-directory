import { SpeakeasyBase } from "../../../internal/utils";
import { GdataMedia } from "./gdatamedia";
/**
 * Request message for `UploadRelease`.
 */
export declare class GoogleFirebaseAppdistroV1UploadReleaseRequest extends SpeakeasyBase {
    /**
     * A reference to data stored on the filesystem, on GFS or in blobstore.
     */
    blob?: GdataMedia;
}
