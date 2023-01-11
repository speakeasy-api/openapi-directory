import { SpeakeasyBase } from "../../../internal/utils";
import { StringTranslationStateEnum } from "./stringtranslationstateenum";
export declare enum StringInSearchTypeEnum {
    LocalProject = "LOCAL_PROJECT",
    ImportedTm = "IMPORTED_TM"
}
export declare class StringInSearch extends SpeakeasyBase {
    fileId?: number;
    internalProjectId?: number;
    lastUpdated?: Date;
    projectId?: number;
    searchScore?: number;
    source?: string;
    status?: StringTranslationStateEnum;
    stringId?: number;
    target?: string;
    targets?: string[];
    tmName?: string;
    type?: StringInSearchTypeEnum;
}
