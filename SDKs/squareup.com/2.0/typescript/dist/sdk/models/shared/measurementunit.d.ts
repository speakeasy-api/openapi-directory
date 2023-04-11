import { SpeakeasyBase } from "../../../internal/utils";
import { MeasurementUnitCustom } from "./measurementunitcustom";
/**
 * Represents a unit of measurement to use with a quantity, such as ounces
 *
 * @remarks
 * or inches. Exactly one of the following fields are required: `custom_unit`,
 * `area_unit`, `length_unit`, `volume_unit`, and `weight_unit`.
 */
export declare class MeasurementUnit extends SpeakeasyBase {
    /**
     * Represents a standard area unit.
     */
    areaUnit?: string;
    /**
     * The information needed to define a custom unit, provided by the seller.
     */
    customUnit?: MeasurementUnitCustom;
    /**
     * Reserved for API integrations that lack the ability to specify a real measurement unit
     */
    genericUnit?: string;
    /**
     * Represents a standard length unit.
     */
    lengthUnit?: string;
    /**
     * Represents a standard unit of time.
     */
    timeUnit?: string;
    /**
     * Represents the type of the measurement unit.
     */
    type?: string;
    /**
     * Represents a standard volume unit.
     */
    volumeUnit?: string;
    /**
     * Represents a standard unit of weight or mass.
     */
    weightUnit?: string;
}
