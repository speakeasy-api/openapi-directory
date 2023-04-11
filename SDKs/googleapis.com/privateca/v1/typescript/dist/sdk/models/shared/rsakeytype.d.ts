import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an RSA key that may be used in a Certificate issued from a CaPool.
 */
export declare class RsaKeyType extends SpeakeasyBase {
    /**
     * Optional. The maximum allowed RSA modulus size (inclusive), in bits. If this is not set, or if set to zero, the service will not enforce an explicit upper bound on RSA modulus sizes.
     */
    maxModulusSize?: string;
    /**
     * Optional. The minimum allowed RSA modulus size (inclusive), in bits. If this is not set, or if set to zero, the service-level min RSA modulus size will continue to apply.
     */
    minModulusSize?: string;
}
