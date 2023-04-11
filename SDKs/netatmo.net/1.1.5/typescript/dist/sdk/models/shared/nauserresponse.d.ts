import { SpeakeasyBase } from "../../../internal/utils";
import { NAUser } from "./nauser";
/**
 * Successful response
 */
export declare class NAUserResponse extends SpeakeasyBase {
    body?: NAUser;
    status?: string;
    timeExec?: number;
    timeServer?: number;
}
