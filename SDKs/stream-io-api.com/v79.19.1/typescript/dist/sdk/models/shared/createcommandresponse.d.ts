import { SpeakeasyBase } from "../../../internal/utils";
import { Command } from "./command";
/**
 * Successful response
 */
export declare class CreateCommandResponse extends SpeakeasyBase {
    /**
     * Represents custom chat command
     */
    command?: Command;
    /**
     * Duration of the request in human-readable format
     */
    duration: string;
}
