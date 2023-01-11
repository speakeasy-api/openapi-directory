import { SpeakeasyBase } from "../../../internal/utils";
import { PagingMeta } from "./pagingmeta";
import { StringWithTranslations } from "./stringwithtranslations";
export declare class StringList extends SpeakeasyBase {
    meta?: PagingMeta;
    translations?: StringWithTranslations[];
}
