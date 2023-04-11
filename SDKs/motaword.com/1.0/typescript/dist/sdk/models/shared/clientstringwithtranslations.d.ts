import { SpeakeasyBase } from "../../../internal/utils";
import { ClientStringTranslation } from "./clientstringtranslation";
export declare class ClientStringWithTranslations extends SpeakeasyBase {
    content?: string;
    language?: string;
    /**
     * the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
     */
    lastChanged?: Date;
    translations?: ClientStringTranslation[];
}
