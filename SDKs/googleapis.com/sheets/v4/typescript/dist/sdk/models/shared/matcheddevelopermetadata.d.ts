import { SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";
import { DeveloperMetadata } from "./developermetadata";
/**
 * A developer metadata entry and the data filters specified in the original request that matched it.
 */
export declare class MatchedDeveloperMetadata extends SpeakeasyBase {
    /**
     * All filters matching the returned developer metadata.
     */
    dataFilters?: DataFilter[];
    /**
     * Developer metadata associated with a location or object in a spreadsheet. Developer metadata may be used to associate arbitrary data with various parts of a spreadsheet and will remain associated at those locations as they move around and the spreadsheet is edited. For example, if developer metadata is associated with row 5 and another row is then subsequently inserted above row 5, that original metadata will still be associated with the row it was first associated with (what is now row 6). If the associated object is deleted its metadata is deleted too.
     */
    developerMetadata?: DeveloperMetadata;
}
