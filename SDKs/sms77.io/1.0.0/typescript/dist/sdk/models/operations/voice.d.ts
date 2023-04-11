import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Decides whether the parameter "text" is plain text or XML. The default value is 0.
 */
export declare enum VoiceXMLEnum {
    One = "1",
    Zero = "0"
}
export declare class VoiceRequest extends SpeakeasyBase {
    /**
     * Sets the sender. Must be a verified sender. Use an inbound number of yours or one of ours.
     */
    from?: string;
    /**
     * The text to convert to a voice message. Accepts valid XML too.
     */
    text: string;
    /**
     * Determines the receiver. Must be a valid phone number or contact from the address book.
     */
    to: string;
    /**
     * Decides whether the parameter "text" is plain text or XML. The default value is 0.
     */
    xml?: VoiceXMLEnum;
}
export declare class VoiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    voice200TextPlainString?: string;
}
