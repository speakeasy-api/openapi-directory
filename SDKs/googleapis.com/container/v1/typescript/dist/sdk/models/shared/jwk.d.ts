import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Jwk is a JSON Web Key as specified in RFC 7517
 */
export declare class Jwk extends SpeakeasyBase {
    /**
     * Algorithm.
     */
    alg?: string;
    /**
     * Used for ECDSA keys.
     */
    crv?: string;
    /**
     * Used for RSA keys.
     */
    e?: string;
    /**
     * Key ID.
     */
    kid?: string;
    /**
     * Key Type.
     */
    kty?: string;
    /**
     * Used for RSA keys.
     */
    n?: string;
    /**
     * Permitted uses for the public keys.
     */
    use?: string;
    /**
     * Used for ECDSA keys.
     */
    x?: string;
    /**
     * Used for ECDSA keys.
     */
    y?: string;
}
