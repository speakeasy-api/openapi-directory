import { SpeakeasyBase } from "../../../internal/utils";
/**
 * same response result will retrun with different status and messageText
 */
export declare class MessageStatus extends SpeakeasyBase {
    messageId?: string;
    referenceId?: number;
    source?: any;
    statusId?: number;
    statusText?: string;
}
