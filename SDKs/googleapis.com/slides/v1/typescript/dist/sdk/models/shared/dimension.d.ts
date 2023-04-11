import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The units for magnitude.
 */
export declare enum DimensionUnitEnum {
    UnitUnspecified = "UNIT_UNSPECIFIED",
    Emu = "EMU",
    Pt = "PT"
}
/**
 * A magnitude in a single direction in the specified units.
 */
export declare class Dimension extends SpeakeasyBase {
    /**
     * The magnitude.
     */
    magnitude?: number;
    /**
     * The units for magnitude.
     */
    unit?: DimensionUnitEnum;
}
