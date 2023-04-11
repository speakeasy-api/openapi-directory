import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Code to uniquely identify the warning type.
 */
export declare enum ApiWarningCodeEnum {
    SqlApiWarningCodeUnspecified = "SQL_API_WARNING_CODE_UNSPECIFIED",
    RegionUnreachable = "REGION_UNREACHABLE",
    MaxResultsExceedsLimit = "MAX_RESULTS_EXCEEDS_LIMIT"
}
/**
 * An Admin API warning message.
 */
export declare class ApiWarning extends SpeakeasyBase {
    /**
     * Code to uniquely identify the warning type.
     */
    code?: ApiWarningCodeEnum;
    /**
     * The warning message.
     */
    message?: string;
    /**
     * The region name for REGION_UNREACHABLE warning.
     */
    region?: string;
}
