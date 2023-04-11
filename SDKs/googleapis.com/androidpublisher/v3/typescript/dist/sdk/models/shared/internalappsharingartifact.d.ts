import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An artifact resource which gets created when uploading an APK or Android App Bundle through internal app sharing.
 */
export declare class InternalAppSharingArtifact extends SpeakeasyBase {
    /**
     * The sha256 fingerprint of the certificate used to sign the generated artifact.
     */
    certificateFingerprint?: string;
    /**
     * The download URL generated for the uploaded artifact. Users that are authorized to download can follow the link to the Play Store app to install it.
     */
    downloadUrl?: string;
    /**
     * The sha256 hash of the artifact represented as a lowercase hexadecimal number, matching the output of the sha256sum command.
     */
    sha256?: string;
}
