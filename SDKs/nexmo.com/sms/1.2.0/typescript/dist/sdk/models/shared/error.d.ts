import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorMessage } from "./errormessage";
/**
 * Error
 */
export declare class ErrorT extends SpeakeasyBase {
    /**
     * The amount of messages in the request
     */
    messageCount?: string;
    messages?: ErrorMessage[];
}
