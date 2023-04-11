import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information on the complexity of this Format.
 */
export declare class FormatComplexity extends SpeakeasyBase {
    /**
     * A non-negative integer that represents the level of detail (LOD) of this format relative to other formats of the same asset with the same format_type. This hint allows you to sort formats from the most-detailed (0) to least-detailed (integers greater than 0).
     */
    lodHint?: number;
    /**
     * The estimated number of triangles.
     */
    triangleCount?: string;
}
