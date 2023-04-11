import { SpeakeasyBase } from "../../../internal/utils";
import { StringTranslationStateEnum } from "./stringtranslationstateenum";
/**
 * String search result typ from ZNT. Options are LOCAL_PROJECT, IMPORTED_TM. Imported TM results should probably not be visible to end users.
 */
export declare enum StringInSearchTypeEnum {
    LocalProject = "LOCAL_PROJECT",
    ImportedTm = "IMPORTED_TM"
}
export declare class StringInSearch extends SpeakeasyBase {
    fileId?: number;
    internalProjectId?: number;
    /**
     * the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
     */
    lastUpdated?: Date;
    projectId?: number;
    searchScore?: number;
    source?: string;
    status?: StringTranslationStateEnum;
    stringId?: number;
    target?: string;
    targets?: string[];
    tmName?: string;
    /**
     * String search result typ from ZNT. Options are LOCAL_PROJECT, IMPORTED_TM. Imported TM results should probably not be visible to end users.
     */
    type?: StringInSearchTypeEnum;
}
