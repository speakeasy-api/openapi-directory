import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Fit level.
 */
export declare enum FitDescriptorFitLevelEnum {
    FitLevelUnspecified = "FIT_LEVEL_UNSPECIFIED",
    Fit = "FIT",
    NoFit = "NO_FIT",
    RequiresEffort = "REQUIRES_EFFORT"
}
/**
 * Describes the fit level of an asset for migration to a specific target.
 */
export declare class FitDescriptor extends SpeakeasyBase {
    /**
     * Fit level.
     */
    fitLevel?: FitDescriptorFitLevelEnum;
}
