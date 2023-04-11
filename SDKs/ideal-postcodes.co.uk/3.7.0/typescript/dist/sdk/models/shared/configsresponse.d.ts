import { SpeakeasyBase } from "../../../internal/utils";
import { Config } from "./config";
export declare enum ConfigsResponseCodeEnum {
    TwoThousand = "2000"
}
export declare enum ConfigsResponseMessageEnum {
    Success = "Success"
}
/**
 * List of configurations
 */
export declare class ConfigsResponseResult extends SpeakeasyBase {
    configs: Config[];
}
/**
 * Success
 */
export declare class ConfigsResponse extends SpeakeasyBase {
    code: ConfigsResponseCodeEnum;
    message: ConfigsResponseMessageEnum;
    /**
     * List of configurations
     */
    result: ConfigsResponseResult;
}
