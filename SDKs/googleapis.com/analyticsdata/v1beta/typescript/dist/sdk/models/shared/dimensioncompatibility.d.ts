import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionMetadata } from "./dimensionmetadata";
/**
 * The compatibility of this dimension. If the compatibility is COMPATIBLE, this dimension can be successfully added to the report.
 */
export declare enum DimensionCompatibilityCompatibilityEnum {
    CompatibilityUnspecified = "COMPATIBILITY_UNSPECIFIED",
    Compatible = "COMPATIBLE",
    Incompatible = "INCOMPATIBLE"
}
/**
 * The compatibility for a single dimension.
 */
export declare class DimensionCompatibility extends SpeakeasyBase {
    /**
     * The compatibility of this dimension. If the compatibility is COMPATIBLE, this dimension can be successfully added to the report.
     */
    compatibility?: DimensionCompatibilityCompatibilityEnum;
    /**
     * Explains a dimension.
     */
    dimensionMetadata?: DimensionMetadata;
}
