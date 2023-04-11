import { SpeakeasyBase } from "../../../internal/utils";
import { ContactIdentifiers } from "./contactidentifiers";
import { Message } from "./message";
import { PhoneNumber } from "./phonenumber";
import { Updated } from "./updated";
export declare class Conversation extends SpeakeasyBase {
    closed?: boolean;
    contact?: ContactIdentifiers;
    created?: Updated;
    id?: string;
    lastMessage?: Message;
    phoneNumber?: PhoneNumber;
    unread?: string[];
    updated?: Updated;
}
