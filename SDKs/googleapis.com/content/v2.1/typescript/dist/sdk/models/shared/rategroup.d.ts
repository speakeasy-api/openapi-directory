import { SpeakeasyBase } from "../../../internal/utils";
import { CarrierRate } from "./carrierrate";
import { Table } from "./table";
import { Value } from "./value";
export declare class RateGroup extends SpeakeasyBase {
    /**
     * A list of shipping labels defining the products to which this rate group applies to. This is a disjunction: only one of the labels has to match for the rate group to apply. May only be empty for the last rate group of a service. Required.
     */
    applicableShippingLabels?: string[];
    /**
     * A list of carrier rates that can be referred to by `mainTable` or `singleValue`.
     */
    carrierRates?: CarrierRate[];
    mainTable?: Table;
    /**
     * Name of the rate group. Optional. If set has to be unique within shipping service.
     */
    name?: string;
    /**
     * The single value of a rate group or the value of a rate group table's cell. Exactly one of `noShipping`, `flatRate`, `pricePercentage`, `carrierRateName`, `subtableName` must be set.
     */
    singleValue?: Value;
    /**
     * A list of subtables referred to by `mainTable`. Can only be set if `mainTable` is set.
     */
    subtables?: Table[];
}
