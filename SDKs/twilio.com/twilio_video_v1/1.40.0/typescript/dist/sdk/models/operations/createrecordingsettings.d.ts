import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateRecordingSettingsServerList: readonly ["https://video.twilio.com"];
export declare class CreateRecordingSettingsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateRecordingSettingsCreateRecordingSettingsRequest extends SpeakeasyBase {
    /**
     * The SID of the stored Credential resource.
     */
    awsCredentialsSid?: string;
    /**
     * The URL of the AWS S3 bucket where the recordings should be stored. We only support DNS-compliant URLs like `https://documentation-example-twilio-bucket/recordings`, where `recordings` is the path in which you want the recordings to be stored. This URL accepts only URI-valid characters, as described in the <a href='https://tools.ietf.org/html/rfc3986#section-2'>RFC 3986</a>.
     */
    awsS3Url?: string;
    /**
     * Whether all recordings should be written to the `aws_s3_url`. When `false`, all recordings are stored in our cloud.
     */
    awsStorageEnabled?: boolean;
    /**
     * Whether all recordings should be stored in an encrypted form. The default is `false`.
     */
    encryptionEnabled?: boolean;
    /**
     * The SID of the Public Key resource to use for encryption.
     */
    encryptionKeySid?: string;
    /**
     * A descriptive string that you create to describe the resource and be shown to users in the console
     */
    friendlyName: string;
}
export declare class CreateRecordingSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    videoV1RecordingSettings?: shared.VideoV1RecordingSettings;
}
