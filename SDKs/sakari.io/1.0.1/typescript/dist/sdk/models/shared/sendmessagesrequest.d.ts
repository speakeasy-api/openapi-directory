import { SpeakeasyBase } from "../../../internal/utils";
import { ContactRequest } from "./contactrequest";
export declare class SendMessagesRequestFilters extends SpeakeasyBase {
    attributes?: Record<string, any>[];
    tags?: string[];
}
export declare class SendMessagesRequestMedia extends SpeakeasyBase {
    url?: string;
}
export declare class SendMessagesRequestPhoneNumberFilterGroup extends SpeakeasyBase {
    id?: string;
}
export declare class SendMessagesRequestPhoneNumberFilter extends SpeakeasyBase {
    group?: SendMessagesRequestPhoneNumberFilterGroup;
}
export declare enum SendMessagesRequestTypeEnum {
    Sms = "SMS",
    Mms = "MMS"
}
export declare class SendMessagesRequest extends SpeakeasyBase {
    contacts?: ContactRequest[];
    conversationStrategy?: string;
    /**
     * List of conversation ids to send messages to
     */
    conversations?: string[];
    filters?: SendMessagesRequestFilters;
    /**
     * List of media objects to attach to message
     */
    media?: SendMessagesRequestMedia[];
    phoneNumberFilter?: SendMessagesRequestPhoneNumberFilter;
    template?: string;
    type?: SendMessagesRequestTypeEnum;
}
