import { SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";
/**
 * A request to delete developer metadata.
 */
export declare class DeleteDeveloperMetadataRequest extends SpeakeasyBase {
    /**
     * Filter that describes what data should be selected or returned from a request.
     */
    dataFilter?: DataFilter;
}
