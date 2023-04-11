import { SpeakeasyBase } from "../../../internal/utils";
import { WeightUnitEnum } from "./weightunitenum";
/**
 * The weight of a package
 */
export declare class Weight extends SpeakeasyBase {
    unit: WeightUnitEnum;
    /**
     * The weight, in the specified unit
     */
    value: number;
}
