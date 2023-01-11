import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ClientStringTranslationStateEnum {
    Translated = "Translated",
    Approved = "Approved"
}
export declare class ClientStringTranslation extends SpeakeasyBase {
    content?: string;
    lastChanged?: Date;
    resource?: string;
    resourceId?: string;
    state?: ClientStringTranslationStateEnum;
    targetLanguage?: string;
}
