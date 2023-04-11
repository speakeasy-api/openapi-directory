import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Allow the specified UUID to hear audio
 */
export declare enum UpdateCallRequestUnearmuffActionEnum {
    Unearmuff = "unearmuff"
}
export declare class UpdateCallRequestUnearmuff extends SpeakeasyBase {
    /**
     * Allow the specified UUID to hear audio
     */
    action?: UpdateCallRequestUnearmuffActionEnum;
}
