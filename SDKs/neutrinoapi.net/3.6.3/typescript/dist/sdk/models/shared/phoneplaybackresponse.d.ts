import { SpeakeasyBase } from "../../../internal/utils";
export declare class PhonePlaybackResponse extends SpeakeasyBase {
    /**
     * True if the call is being made now
     */
    calling: boolean;
    /**
     * True if this a valid phone number
     */
    numberValid: boolean;
}
