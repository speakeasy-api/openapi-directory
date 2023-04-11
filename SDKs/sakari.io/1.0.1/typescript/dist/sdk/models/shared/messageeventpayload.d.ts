import { SpeakeasyBase } from "../../../internal/utils";
import { ContactIdentifiers } from "./contactidentifiers";
export declare class MessageEventPayload extends SpeakeasyBase {
    contact?: ContactIdentifiers;
    error?: string;
    message?: string;
    status?: string;
}
