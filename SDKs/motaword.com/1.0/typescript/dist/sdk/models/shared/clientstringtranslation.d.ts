import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ClientStringTranslationStateEnum {
    Translated = "Translated",
    Approved = "Approved"
}
export declare class ClientStringTranslation extends SpeakeasyBase {
    content?: string;
    /**
     * the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
     */
    lastChanged?: Date;
    resource?: string;
    resourceId?: string;
    state?: ClientStringTranslationStateEnum;
    targetLanguage?: string;
}
