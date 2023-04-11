import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of SHA certificate encoded in the hash.
 */
export declare enum ShaCertificateCertTypeEnum {
    ShaCertificateTypeUnspecified = "SHA_CERTIFICATE_TYPE_UNSPECIFIED",
    Sha1 = "SHA_1",
    Sha256 = "SHA_256"
}
/**
 * A SHA-1 or SHA-256 certificate associated with the AndroidApp.
 */
export declare class ShaCertificate extends SpeakeasyBase {
    /**
     * The type of SHA certificate encoded in the hash.
     */
    certType?: ShaCertificateCertTypeEnum;
    /**
     * The resource name of the ShaCertificate for the AndroidApp, in the format: projects/PROJECT_IDENTIFIER/androidApps/APP_ID/sha/SHA_HASH * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.androidApps#AndroidApp.FIELDS.app_id)). * SHA_HASH: the certificate hash for the App (see [`shaHash`](../projects.androidApps.sha#ShaCertificate.FIELDS.sha_hash)).
     */
    name?: string;
    /**
     * The certificate hash for the `AndroidApp`.
     */
    shaHash?: string;
}
