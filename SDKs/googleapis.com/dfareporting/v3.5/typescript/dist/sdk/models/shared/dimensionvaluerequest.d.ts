import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionFilter } from "./dimensionfilter";
/**
 * Represents a DimensionValuesRequest.
 */
export declare class DimensionValueRequest extends SpeakeasyBase {
    /**
     * The name of the dimension for which values should be requested.
     */
    dimensionName?: string;
    endDate?: Date;
    /**
     * The list of filters by which to filter values. The filters are ANDed.
     */
    filters?: DimensionFilter[];
    /**
     * The kind of request this is, in this case dfareporting#dimensionValueRequest .
     */
    kind?: string;
    startDate?: Date;
}
