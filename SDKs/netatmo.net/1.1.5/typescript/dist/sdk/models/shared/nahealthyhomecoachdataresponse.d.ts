import { SpeakeasyBase } from "../../../internal/utils";
import { NAHealthyHomeCoachDataBody } from "./nahealthyhomecoachdatabody";
/**
 * Successful response
 */
export declare class NAHealthyHomeCoachDataResponse extends SpeakeasyBase {
    body?: NAHealthyHomeCoachDataBody;
    status?: string;
    timeExec?: number;
    timeServer?: number;
}
