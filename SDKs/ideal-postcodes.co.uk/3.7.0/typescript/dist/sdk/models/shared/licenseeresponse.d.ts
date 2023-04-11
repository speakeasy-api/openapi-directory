import { SpeakeasyBase } from "../../../internal/utils";
import { Licensee } from "./licensee";
export declare enum LicenseeResponseCodeEnum {
    TwoThousand = "2000"
}
export declare enum LicenseeResponseMessageEnum {
    Success = "Success"
}
/**
 * Success
 */
export declare class LicenseeResponse extends SpeakeasyBase {
    code: LicenseeResponseCodeEnum;
    message: LicenseeResponseMessageEnum;
    result: Licensee;
}
