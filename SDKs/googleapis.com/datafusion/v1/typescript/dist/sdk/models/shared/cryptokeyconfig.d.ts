import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The crypto key configuration. This field is used by the Customer-managed encryption keys (CMEK) feature.
 */
export declare class CryptoKeyConfig extends SpeakeasyBase {
    /**
     * The name of the key which is used to encrypt/decrypt customer data. For key in Cloud KMS, the key should be in the format of `projects/* /locations/* /keyRings/* /cryptoKeys/*`.
     */
    keyReference?: string;
}
