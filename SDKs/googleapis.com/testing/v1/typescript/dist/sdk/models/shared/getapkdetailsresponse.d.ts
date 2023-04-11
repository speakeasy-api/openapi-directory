import { SpeakeasyBase } from "../../../internal/utils";
import { ApkDetail } from "./apkdetail";
/**
 * Response containing the details of the specified Android application APK.
 */
export declare class GetApkDetailsResponse extends SpeakeasyBase {
    /**
     * Android application details based on application manifest and apk archive contents.
     */
    apkDetail?: ApkDetail;
}
