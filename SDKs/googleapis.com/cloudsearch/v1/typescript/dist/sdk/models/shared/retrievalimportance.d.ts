import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates the ranking importance given to property when it is matched during retrieval. Once set, the token importance of a property cannot be changed.
 */
export declare enum RetrievalImportanceImportanceEnum {
    Default = "DEFAULT",
    Highest = "HIGHEST",
    High = "HIGH",
    Low = "LOW",
    None = "NONE"
}
export declare class RetrievalImportance extends SpeakeasyBase {
    /**
     * Indicates the ranking importance given to property when it is matched during retrieval. Once set, the token importance of a property cannot be changed.
     */
    importance?: RetrievalImportanceImportanceEnum;
}
