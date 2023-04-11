import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings for a JWK set
 */
export declare class JWKSAlgoSettings extends SpeakeasyBase {
    /**
     * The headers for the http call
     */
    headers?: Record<string, string>;
    /**
     * The type of key: RSA or EC
     */
    kty?: string;
    /**
     * The timeout of the http call
     */
    timeout?: number;
    /**
     * The ttl of the keyset
     */
    ttl?: number;
    /**
     * String with value JWKSAlgoSettings
     */
    type: string;
    /**
     * The url for the http call
     */
    url?: string;
}
