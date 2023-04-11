import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents configuration for a generic web service.
 */
export declare class GoogleCloudDialogflowCxV3beta1WebhookGenericWebService extends SpeakeasyBase {
    /**
     * Optional. Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification. This overrides the default SSL trust store. If this is empty or unspecified, Dialogflow will use Google's default trust store to verify certificates. N.B. Make sure the HTTPS server certificates are signed with "subject alt name". For instance a certificate can be self-signed using the following command, ``` openssl x509 -req -days 200 -in example.com.csr \ -signkey example.com.key \ -out example.com.crt \ -extfile <(printf "\nsubjectAltName='DNS:www.example.com'") ```
     */
    allowedCaCerts?: string[];
    /**
     * The password for HTTP Basic authentication.
     */
    password?: string;
    /**
     * The HTTP request headers to send together with webhook requests.
     */
    requestHeaders?: Record<string, string>;
    /**
     * Required. The webhook URI for receiving POST requests. It must use https protocol.
     */
    uri?: string;
    /**
     * The user name for HTTP Basic authentication.
     */
    username?: string;
}
