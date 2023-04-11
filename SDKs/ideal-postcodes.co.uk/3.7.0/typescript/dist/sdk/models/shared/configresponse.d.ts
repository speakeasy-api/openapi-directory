import { SpeakeasyBase } from "../../../internal/utils";
import { Config } from "./config";
export declare enum ConfigResponseCodeEnum {
    TwoThousand = "2000"
}
export declare enum ConfigResponseMessageEnum {
    Success = "Success"
}
/**
 * Success
 */
export declare class ConfigResponse extends SpeakeasyBase {
    code: ConfigResponseCodeEnum;
    message: ConfigResponseMessageEnum;
    result: Config;
}
