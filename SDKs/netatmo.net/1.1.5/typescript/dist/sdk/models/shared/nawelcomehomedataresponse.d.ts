import { SpeakeasyBase } from "../../../internal/utils";
import { NAWelcomeHomeData } from "./nawelcomehomedata";
/**
 * Successful response
 */
export declare class NAWelcomeHomeDataResponse extends SpeakeasyBase {
    body?: NAWelcomeHomeData;
    status?: string;
    timeExec?: number;
    timeServer?: number;
}
