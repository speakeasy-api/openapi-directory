import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetthermpointSecurity extends SpeakeasyBase {
    codeOauth?: string;
    passwordOauth?: string;
}
/**
 * Chosen setpoint_mode
 */
export declare enum SetthermpointSetpointModeEnum {
    Program = "program",
    Away = "away",
    Hg = "hg",
    Manual = "manual",
    Off = "off",
    Max = "max"
}
export declare class SetthermpointRequest extends SpeakeasyBase {
    /**
     * The relay id
     */
    deviceId: string;
    /**
     * The thermostat id
     */
    moduleId: string;
    /**
     * When using the manual or max setpoint_mode, this parameter defines when the setpoint expires.
     */
    setpointEndtime?: number;
    /**
     * Chosen setpoint_mode
     */
    setpointMode: SetthermpointSetpointModeEnum;
    /**
     * When using the manual setpoint_mode, this parameter defines the temperature setpoint (in Celcius) to use.
     */
    setpointTemp?: number;
}
export declare class SetthermpointResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    naOkResponse?: shared.NAOkResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
