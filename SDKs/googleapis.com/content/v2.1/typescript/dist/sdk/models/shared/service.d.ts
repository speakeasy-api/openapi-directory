import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryTime } from "./deliverytime";
import { MinimumOrderValueTable } from "./minimumordervaluetable";
import { PickupCarrierService } from "./pickupcarrierservice";
import { Price } from "./price";
import { RateGroup } from "./rategroup";
export declare class Service extends SpeakeasyBase {
    /**
     * A boolean exposing the active status of the shipping service. Required.
     */
    active?: boolean;
    /**
     * The CLDR code of the currency to which this service applies. Must match that of the prices in rate groups.
     */
    currency?: string;
    /**
     * The CLDR territory code of the country to which the service applies. Required.
     */
    deliveryCountry?: string;
    deliveryTime?: DeliveryTime;
    /**
     * Eligibility for this service. Acceptable values are: - "`All scenarios`" - "`All scenarios except Shopping Actions`" - "`Shopping Actions`"
     */
    eligibility?: string;
    minimumOrderValue?: Price;
    minimumOrderValueTable?: MinimumOrderValueTable;
    /**
     * Free-form name of the service. Must be unique within target account. Required.
     */
    name?: string;
    pickupService?: PickupCarrierService;
    /**
     * Shipping rate group definitions. Only the last one is allowed to have an empty `applicableShippingLabels`, which means "everything else". The other `applicableShippingLabels` must not overlap.
     */
    rateGroups?: RateGroup[];
    /**
     * Type of locations this service ships orders to. Acceptable values are: - "`delivery`" - "`pickup`"
     */
    shipmentType?: string;
}
