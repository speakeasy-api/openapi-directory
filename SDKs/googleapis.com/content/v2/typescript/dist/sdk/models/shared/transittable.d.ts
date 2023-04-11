import { SpeakeasyBase } from "../../../internal/utils";
import { TransitTableTransitTimeRow } from "./transittabletransittimerow";
export declare class TransitTable extends SpeakeasyBase {
    /**
     * A list of postal group names. The last value can be `"all other locations"`. Example: `["zone 1", "zone 2", "all other locations"]`. The referred postal code groups must match the delivery country of the service.
     */
    postalCodeGroupNames?: string[];
    rows?: TransitTableTransitTimeRow[];
    /**
     * A list of transit time labels. The last value can be `"all other labels"`. Example: `["food", "electronics", "all other labels"]`.
     */
    transitTimeLabels?: string[];
}
