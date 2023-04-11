import { SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
/**
 * successful operation
 */
export declare class MessageResponse extends SpeakeasyBase {
    data?: Message;
    success?: boolean;
}
