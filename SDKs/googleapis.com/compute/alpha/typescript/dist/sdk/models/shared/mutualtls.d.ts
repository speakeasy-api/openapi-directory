import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies if the server TLS is configured to be strict or permissive. This field can be set to one of the following: STRICT: Client certificate must be presented, connection is in TLS. PERMISSIVE: Client certificate can be omitted, connection can be either plaintext or TLS.
 */
export declare enum MutualTlsModeEnum {
    Invalid = "INVALID",
    Permissive = "PERMISSIVE",
    Strict = "STRICT"
}
/**
 * [Deprecated] Configuration for the mutual Tls mode for peer authentication. Configuration for the mutual Tls mode for peer authentication.
 */
export declare class MutualTls extends SpeakeasyBase {
    /**
     * Specifies if the server TLS is configured to be strict or permissive. This field can be set to one of the following: STRICT: Client certificate must be presented, connection is in TLS. PERMISSIVE: Client certificate can be omitted, connection can be either plaintext or TLS.
     */
    mode?: MutualTlsModeEnum;
}
