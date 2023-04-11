import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateCredentialServerList: readonly ["https://notify.twilio.com"];
export declare class UpdateCredentialSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateCredentialUpdateCredentialRequest extends SpeakeasyBase {
    /**
     * [GCM only] The `Server key` of your project from Firebase console under Settings / Cloud messaging.
     */
    apiKey?: string;
    /**
     * [APN only] The URL-encoded representation of the certificate. Strip everything outside of the headers, e.g. `-----BEGIN CERTIFICATE-----MIIFnTCCBIWgAwIBAgIIAjy9H849+E8wDQYJKoZIhvcNAQEFBQAwgZYxCzAJBgNV.....A==-----END CERTIFICATE-----`
     */
    certificate?: string;
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters long.
     */
    friendlyName?: string;
    /**
     * [APN only] The URL-encoded representation of the private key. Strip everything outside of the headers, e.g. `-----BEGIN RSA PRIVATE KEY-----MIIEpQIBAAKCAQEAuyf/lNrH9ck8DmNyo3fGgvCI1l9s+cmBY3WIz+cUDqmxiieR\n.-----END RSA PRIVATE KEY-----`
     */
    privateKey?: string;
    /**
     * [APN only] Whether to send the credential to sandbox APNs. Can be `true` to send to sandbox APNs or `false` to send to production.
     */
    sandbox?: boolean;
    /**
     * [FCM only] The `Server key` of your project from Firebase console under Settings / Cloud messaging.
     */
    secret?: string;
}
export declare class UpdateCredentialRequest extends SpeakeasyBase {
    requestBody?: UpdateCredentialUpdateCredentialRequest;
    /**
     * The Twilio-provided string that uniquely identifies the Credential resource to update.
     */
    sid: string;
}
export declare class UpdateCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    notifyV1Credential?: shared.NotifyV1Credential;
}
