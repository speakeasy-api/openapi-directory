import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings for an HMAC + SHA signing algorithm
 */
export declare class HSAlgoSettings extends SpeakeasyBase {
    /**
     * The secret value for the HMAC function
     */
    secret: string;
    /**
     * Size for SHA function. can be 256, 384 or 512
     */
    size: number;
    /**
     * String with value HSAlgoSettings
     */
    type: string;
}
