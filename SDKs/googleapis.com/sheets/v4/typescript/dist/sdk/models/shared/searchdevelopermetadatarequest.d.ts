import { SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";
/**
 * A request to retrieve all developer metadata matching the set of specified criteria.
 */
export declare class SearchDeveloperMetadataRequest extends SpeakeasyBase {
    /**
     * The data filters describing the criteria used to determine which DeveloperMetadata entries to return. DeveloperMetadata matching any of the specified filters are included in the response.
     */
    dataFilters?: DataFilter[];
}
