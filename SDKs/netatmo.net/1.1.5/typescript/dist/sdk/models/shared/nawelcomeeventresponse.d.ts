import { SpeakeasyBase } from "../../../internal/utils";
import { NAWelcomeEventData } from "./nawelcomeeventdata";
/**
 * Successful response
 */
export declare class NAWelcomeEventResponse extends SpeakeasyBase {
    body?: NAWelcomeEventData;
    status?: string;
    timeExec?: number;
    timeServer?: number;
}
