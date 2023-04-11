import { SpeakeasyBase } from "../../../internal/utils";
import { ContactIdentifiers } from "./contactidentifiers";
import { ErrorT } from "./error";
import { Updated } from "./updated";
export declare class MessageConversation extends SpeakeasyBase {
    id?: string;
}
export declare class MessageMedia extends SpeakeasyBase {
    filename?: string;
    type?: string;
    url?: string;
}
export declare class Message extends SpeakeasyBase {
    contact?: ContactIdentifiers;
    conversation?: MessageConversation;
    created?: Updated;
    error?: ErrorT;
    id?: string;
    /**
     * List of media objects attached to message
     */
    media?: MessageMedia[];
    message?: string;
    outgoing?: boolean;
    phoneNumber?: string;
    price?: number;
    read?: boolean;
    segments?: number;
    status?: string;
    template?: string;
    updated?: Updated;
}
