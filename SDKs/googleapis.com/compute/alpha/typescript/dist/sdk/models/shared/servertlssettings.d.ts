import { SpeakeasyBase } from "../../../internal/utils";
import { TlsContext } from "./tlscontext";
/**
 * Indicates whether connections should be secured using TLS. The value of this field determines how TLS is enforced. This field can be set to one of the following: - SIMPLE Secure connections with standard TLS semantics. - MUTUAL Secure connections to the backends using mutual TLS by presenting client certificates for authentication.
 */
export declare enum ServerTlsSettingsTlsModeEnum {
    Invalid = "INVALID",
    Mutual = "MUTUAL",
    Simple = "SIMPLE"
}
/**
 * The TLS settings for the server.
 */
export declare class ServerTlsSettings extends SpeakeasyBase {
    /**
     * [Deprecated] The TLS settings for the client or server. The TLS settings for the client or server.
     */
    proxyTlsContext?: TlsContext;
    /**
     * A list of alternate names to verify the subject identity in the certificate presented by the client.
     */
    subjectAltNames?: string[];
    /**
     * Indicates whether connections should be secured using TLS. The value of this field determines how TLS is enforced. This field can be set to one of the following: - SIMPLE Secure connections with standard TLS semantics. - MUTUAL Secure connections to the backends using mutual TLS by presenting client certificates for authentication.
     */
    tlsMode?: ServerTlsSettingsTlsModeEnum;
}
