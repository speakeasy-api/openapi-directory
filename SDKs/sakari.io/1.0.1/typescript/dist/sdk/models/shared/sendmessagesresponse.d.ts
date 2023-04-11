import { SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";
import { Message } from "./message";
export declare class SendMessagesResponseData extends SpeakeasyBase {
    estimatedPrice?: number;
    invalid?: Contact[];
    jobId?: string;
    messages?: Message[];
    requested?: number;
    valid?: number;
}
/**
 * successful operation
 */
export declare class SendMessagesResponse extends SpeakeasyBase {
    data?: SendMessagesResponseData;
}
