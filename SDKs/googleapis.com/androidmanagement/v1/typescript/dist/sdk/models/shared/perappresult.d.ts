import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The result of an attempt to clear the data of a single app.
 */
export declare enum PerAppResultClearingResultEnum {
    ClearingResultUnspecified = "CLEARING_RESULT_UNSPECIFIED",
    Success = "SUCCESS",
    AppNotFound = "APP_NOT_FOUND",
    AppProtected = "APP_PROTECTED",
    ApiLevel = "API_LEVEL"
}
/**
 * The result of an attempt to clear the data of a single app.
 */
export declare class PerAppResult extends SpeakeasyBase {
    /**
     * The result of an attempt to clear the data of a single app.
     */
    clearingResult?: PerAppResultClearingResultEnum;
}
