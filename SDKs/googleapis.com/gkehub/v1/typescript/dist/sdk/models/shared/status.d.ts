import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Code specifies AppDevExperienceFeature's subcomponent ready state.
 */
export declare enum StatusCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Ok = "OK",
    Failed = "FAILED",
    Unknown = "UNKNOWN"
}
/**
 * Status specifies state for the subcomponent.
 */
export declare class Status extends SpeakeasyBase {
    /**
     * Code specifies AppDevExperienceFeature's subcomponent ready state.
     */
    code?: StatusCodeEnum;
    /**
     * Description is populated if Code is Failed, explaining why it has failed.
     */
    description?: string;
}
