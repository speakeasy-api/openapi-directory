import { SpeakeasyBase } from "../../../internal/utils";
import { Language } from "./language";
/**
 * Language List Response
 */
export declare class LanguagesListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#languagesListResponse".
     */
    kind?: string;
    /**
     * Language collection.
     */
    languages?: Language[];
}
