import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateCompositionSettingsServerList: readonly ["https://video.twilio.com"];
export declare class CreateCompositionSettingsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateCompositionSettingsCreateCompositionSettingsRequest extends SpeakeasyBase {
    /**
     * The SID of the stored Credential resource.
     */
    awsCredentialsSid?: string;
    /**
     * The URL of the AWS S3 bucket where the compositions should be stored. We only support DNS-compliant URLs like `https://documentation-example-twilio-bucket/compositions`, where `compositions` is the path in which you want the compositions to be stored. This URL accepts only URI-valid characters, as described in the <a href='https://tools.ietf.org/html/rfc3986#section-2'>RFC 3986</a>.
     */
    awsS3Url?: string;
    /**
     * Whether all compositions should be written to the `aws_s3_url`. When `false`, all compositions are stored in our cloud.
     */
    awsStorageEnabled?: boolean;
    /**
     * Whether all compositions should be stored in an encrypted form. The default is `false`.
     */
    encryptionEnabled?: boolean;
    /**
     * The SID of the Public Key resource to use for encryption.
     */
    encryptionKeySid?: string;
    /**
     * A descriptive string that you create to describe the resource and show to the user in the console
     */
    friendlyName: string;
}
export declare class CreateCompositionSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    videoV1CompositionSettings?: shared.VideoV1CompositionSettings;
}
