import { SpeakeasyBase } from "../../../internal/utils";
export declare class KMSEnvMap extends SpeakeasyBase {
    /**
     * The value of the cipherText response from the `encrypt` method.
     */
    cipherText?: string;
    /**
     * The name of the KMS key that will be used to decrypt the cipher text.
     */
    keyName?: string;
}
