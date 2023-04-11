import { SpeakeasyBase } from "../../../internal/utils";
import { TlsContext } from "./tlscontext";
/**
 * Indicates whether connections to this port should be secured using TLS. The value of this field determines how TLS is enforced. This can be set to one of the following values: DISABLE: Do not setup a TLS connection to the backends. SIMPLE: Originate a TLS connection to the backends. MUTUAL: Secure connections to the backends using mutual TLS by presenting client certificates for authentication.
 */
export declare enum ClientTlsSettingsModeEnum {
    Disable = "DISABLE",
    Invalid = "INVALID",
    Mutual = "MUTUAL",
    Simple = "SIMPLE"
}
/**
 * [Deprecated] The client side authentication settings for connection originating from the backend service. the backend service.
 */
export declare class ClientTlsSettings extends SpeakeasyBase {
    /**
     * [Deprecated] The TLS settings for the client or server. The TLS settings for the client or server.
     */
    clientTlsContext?: TlsContext;
    /**
     * Indicates whether connections to this port should be secured using TLS. The value of this field determines how TLS is enforced. This can be set to one of the following values: DISABLE: Do not setup a TLS connection to the backends. SIMPLE: Originate a TLS connection to the backends. MUTUAL: Secure connections to the backends using mutual TLS by presenting client certificates for authentication.
     */
    mode?: ClientTlsSettingsModeEnum;
    /**
     * SNI string to present to the server during TLS handshake. This field is applicable only when mode is SIMPLE or MUTUAL.
     */
    sni?: string;
    /**
     * A list of alternate names to verify the subject identity in the certificate.If specified, the proxy will verify that the server certificate's subject alt name matches one of the specified values. This field is applicable only when mode is SIMPLE or MUTUAL.
     */
    subjectAltNames?: string[];
}
