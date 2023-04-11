import { SpeakeasyBase } from "../../../internal/utils";
import { FilterValue } from "./filtervalue";
/**
 * A query filter to search for appointment segments by.
 */
export declare class SegmentFilter extends SpeakeasyBase {
    /**
     * The ID of the [CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation) representing the service booked in this segment.
     */
    serviceVariationId: string;
    /**
     * A filter to select resources based on an exact field value. For any given
     *
     * @remarks
     * value, the value can only be in one property. Depending on the field, either
     * all properties can be set or only a subset will be available.
     *
     * Refer to the documentation of the field.
     */
    teamMemberIdFilter?: FilterValue;
}
