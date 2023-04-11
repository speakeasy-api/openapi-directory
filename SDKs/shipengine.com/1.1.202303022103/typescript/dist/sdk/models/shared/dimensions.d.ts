import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The dimension units that are supported by ShipEngine.
 */
export declare enum DimensionsDimensionUnitEnum {
    Inch = "inch",
    Centimeter = "centimeter"
}
/**
 * The dimensions of a package
 */
export declare class Dimensions extends SpeakeasyBase {
    /**
     * The length of the package, in the specified unit
     */
    height: number;
    /**
     * The length of the package, in the specified unit
     */
    length: number;
    unit: DimensionsDimensionUnitEnum;
    /**
     * The width of the package, in the specified unit
     */
    width: number;
}
