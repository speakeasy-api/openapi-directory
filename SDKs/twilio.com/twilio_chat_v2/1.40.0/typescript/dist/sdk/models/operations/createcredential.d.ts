import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateCredentialServerList: readonly ["https://chat.twilio.com"];
export declare class CreateCredentialSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateCredentialCreateCredentialRequest extends SpeakeasyBase {
    /**
     * [GCM only] The API key for the project that was obtained from the Google Developer console for your GCM Service application credential.
     */
    apiKey?: string;
    /**
     * [APN only] The URL encoded representation of the certificate. For example,
     *
     * @remarks
     * `-----BEGIN CERTIFICATE-----
     * MIIFnTCCBIWgAwIBAgIIAjy9H849+E8wDQYJKoZIhvcNAQEF.....A==
     * -----END CERTIFICATE-----`
     */
    certificate?: string;
    /**
     * A descriptive string that you create to describe the new resource. It can be up to 64 characters long.
     */
    friendlyName?: string;
    /**
     * [APN only] The URL encoded representation of the private key. For example,
     *
     * @remarks
     * `-----BEGIN RSA PRIVATE KEY-----
     * MIIEpQIBAAKCAQEAuyf/lNrH9ck8DmNyo3fG...
     * -----END RSA PRIVATE KEY-----`
     */
    privateKey?: string;
    /**
     * [APN only] Whether to send the credential to sandbox APNs. Can be `true` to send to sandbox APNs or `false` to send to production.
     */
    sandbox?: boolean;
    /**
     * [FCM only] The **Server key** of your project from the Firebase console, found under Settings / Cloud messaging.
     */
    secret?: string;
    type: shared.CredentialEnumPushServiceEnum;
}
export declare class CreateCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    chatV2Credential?: shared.ChatV2Credential;
}
