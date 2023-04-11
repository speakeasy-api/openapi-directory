import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Details about the app recognition verdict
 */
export declare enum AppIntegrityAppRecognitionVerdictEnum {
    Unknown = "UNKNOWN",
    PlayRecognized = "PLAY_RECOGNIZED",
    UnrecognizedVersion = "UNRECOGNIZED_VERSION",
    Unevaluated = "UNEVALUATED"
}
/**
 * Contains the application integrity information.
 */
export declare class AppIntegrity extends SpeakeasyBase {
    /**
     * Required. Details about the app recognition verdict
     */
    appRecognitionVerdict?: AppIntegrityAppRecognitionVerdictEnum;
    /**
     * The SHA256 hash of the requesting app's signing certificates (base64 web-safe encoded). Set iff app_recognition_verdict != UNEVALUATED.
     */
    certificateSha256Digest?: string[];
    /**
     * Package name of the application under attestation. Set iff app_recognition_verdict != UNEVALUATED.
     */
    packageName?: string;
    /**
     * Version code of the application. Set iff app_recognition_verdict != UNEVALUATED.
     */
    versionCode?: string;
}
