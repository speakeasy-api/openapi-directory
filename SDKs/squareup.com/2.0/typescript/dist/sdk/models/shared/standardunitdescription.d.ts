import { SpeakeasyBase } from "../../../internal/utils";
import { MeasurementUnit } from "./measurementunit";
/**
 * Contains the name and abbreviation for standard measurement unit.
 */
export declare class StandardUnitDescription extends SpeakeasyBase {
    /**
     * UI display abbreviation for the measurement unit. For example, 'lb'.
     */
    abbreviation?: string;
    /**
     * UI display name of the measurement unit. For example, 'Pound'.
     */
    name?: string;
    /**
     * Represents a unit of measurement to use with a quantity, such as ounces
     *
     * @remarks
     * or inches. Exactly one of the following fields are required: `custom_unit`,
     * `area_unit`, `length_unit`, `volume_unit`, and `weight_unit`.
     */
    unit?: MeasurementUnit;
}
