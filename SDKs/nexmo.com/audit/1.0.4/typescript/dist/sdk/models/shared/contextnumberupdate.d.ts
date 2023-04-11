import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of endpoint the number has been forwarded to
 */
export declare enum ContextNumberUpdateVoiceTypeEnum {
    Tel = "tel",
    Sip = "sip",
    Vxml = "vxml",
    App = "app"
}
/**
 * A valid JSON object with information detailing the context of the audit event.
 */
export declare class ContextNumberUpdate extends SpeakeasyBase {
    /**
     * The country of the number
     */
    country?: string;
    /**
     * The URL of the endpoint the number has been forwarded to
     */
    http?: string;
    /**
     * The phone number linked/unlinked to your application
     */
    msisdn?: string;
    /**
     * The type of endpoint the number has been forwarded to
     */
    voiceType?: ContextNumberUpdateVoiceTypeEnum;
    /**
     * The value of the endpoint the number has been forwarded to
     */
    voiceValue?: string;
}
