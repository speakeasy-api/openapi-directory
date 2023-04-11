import { SpeakeasyBase } from "../../../internal/utils";
import { NAThermostatDataBody } from "./nathermostatdatabody";
/**
 * Successful response
 */
export declare class NAThermostatDataResponse extends SpeakeasyBase {
    body?: NAThermostatDataBody;
    status?: string;
    timeExec?: number;
    timeServer?: number;
}
