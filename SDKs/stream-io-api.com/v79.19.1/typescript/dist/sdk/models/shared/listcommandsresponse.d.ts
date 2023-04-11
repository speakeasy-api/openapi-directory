import { SpeakeasyBase } from "../../../internal/utils";
import { Command } from "./command";
/**
 * Successful response
 */
export declare class ListCommandsResponse extends SpeakeasyBase {
    commands: Command[];
    /**
     * Duration of the request in human-readable format
     */
    duration: string;
}
