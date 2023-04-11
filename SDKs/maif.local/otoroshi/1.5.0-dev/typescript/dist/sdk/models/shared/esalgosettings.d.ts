import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings for an EC + SHA signing algorithm
 */
export declare class ESAlgoSettings extends SpeakeasyBase {
    /**
     * The private key for the RSA function
     */
    privateKey?: string;
    /**
     * The public key for the RSA function
     */
    publicKey: string;
    /**
     * Size for SHA function. can be 256, 384 or 512
     */
    size: number;
    /**
     * String with value ESAlgoSettings
     */
    type: string;
}
