import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateInfo } from "./certificateinfo";
/**
 * Describes an android app asset.
 */
export declare class AndroidAppAsset extends SpeakeasyBase {
    /**
     * Describes an X509 certificate.
     */
    certificate?: CertificateInfo;
    /**
     * Android App assets are naturally identified by their Java package name. For example, the Google Maps app uses the package name `com.google.android.apps.maps`. REQUIRED
     */
    packageName?: string;
}
