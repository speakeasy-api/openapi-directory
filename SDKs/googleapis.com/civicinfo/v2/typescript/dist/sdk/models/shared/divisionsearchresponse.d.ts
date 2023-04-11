import { SpeakeasyBase } from "../../../internal/utils";
import { DivisionSearchResult } from "./divisionsearchresult";
/**
 * The result of a division search query.
 */
export declare class DivisionSearchResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "civicinfo#divisionSearchResponse".
     */
    kind?: string;
    results?: DivisionSearchResult[];
}
