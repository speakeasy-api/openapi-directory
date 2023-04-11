import { SpeakeasyBase } from "../../../internal/utils";
import { ClientStringWithTranslations } from "./clientstringwithtranslations";
import { PagingMeta } from "./pagingmeta";
/**
 * List of strings in JSON
 */
export declare class ClientStrings extends SpeakeasyBase {
    meta?: PagingMeta;
    strings?: ClientStringWithTranslations[];
}
