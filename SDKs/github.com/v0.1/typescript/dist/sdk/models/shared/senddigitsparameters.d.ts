import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Call leg(s) to which DTMFs will be sent; `aleg` refers to the initial call leg, `bleg` refers to the bridged call leg, if applicable.
 */
export declare enum SendDigitsParametersLegEnum {
    Aleg = "aleg",
    Bleg = "bleg",
    Both = "both"
}
/**
 * POST parameters
 */
export declare class SendDigitsParameters extends SpeakeasyBase {
    /**
     * Unique identifier of the call to send DTMF to
     */
    callUUID: string;
    /**
     * DTMF tones to be sent; each occurrence of `w` implies a 0.5 seconds delay whereas `W` will apply a whole second delay. To alter the tone duration (by default, 2000ms), append `@` and the length in milliseconds at the end of the string
     */
    digits: string;
    /**
     * Call leg(s) to which DTMFs will be sent; `aleg` refers to the initial call leg, `bleg` refers to the bridged call leg, if applicable.
     */
    leg?: SendDigitsParametersLegEnum;
}
