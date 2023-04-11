import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class VideoV1RecordingSettings extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the RecordingSettings resource.
     */
    accountSid?: string;
    /**
     * The SID of the stored Credential resource.
     */
    awsCredentialsSid?: string;
    /**
     * The URL of the AWS S3 bucket where the recordings are stored. We only support DNS-compliant URLs like `https://documentation-example-twilio-bucket/recordings`, where `recordings` is the path in which you want the recordings to be stored. This URL accepts only URI-valid characters, as described in the <a href='https://tools.ietf.org/html/rfc3986#section-2'>RFC 3986</a>.
     */
    awsS3Url?: string;
    /**
     * Whether all recordings are written to the `aws_s3_url`. When `false`, all recordings are stored in our cloud.
     */
    awsStorageEnabled?: boolean;
    /**
     * Whether all recordings are stored in an encrypted form. The default is `false`.
     */
    encryptionEnabled?: boolean;
    /**
     * The SID of the Public Key resource used for encryption.
     */
    encryptionKeySid?: string;
    /**
     * The string that you assigned to describe the resource and show the user in the console
     */
    friendlyName?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
