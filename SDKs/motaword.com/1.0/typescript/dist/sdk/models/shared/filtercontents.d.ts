import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleModel } from "./simplemodel";
/**
 * Filter contents
 */
export declare class FilterContents extends SpeakeasyBase {
    budgetCodes?: string[];
    categories?: string[];
    clients?: SimpleModel[];
    documents?: SimpleModel[];
    projects?: SimpleModel[];
    severities?: string[];
    sourceLanguages?: string[];
    subjects?: string[];
    targetLanguages?: string[];
    vendors?: SimpleModel[];
}
