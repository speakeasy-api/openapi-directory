import { SpeakeasyBase } from "../../../internal/utils";
import { ClientStringTranslation } from "./clientstringtranslation";
export declare class ClientStringWithTranslations extends SpeakeasyBase {
    content?: string;
    language?: string;
    lastChanged?: Date;
    translations?: ClientStringTranslation[];
}
