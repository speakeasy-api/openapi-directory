import { SpeakeasyBase } from "../../../internal/utils";
import { ProductConversationsEnum } from "./productconversationsenum";
/**
 * Conversations
**/
export declare class Conversations extends SpeakeasyBase {
    accountId: string;
    callbackUrl?: string;
    conversationId?: string;
    dateEnd?: Date;
    dateStart?: Date;
    includeSubaccounts?: boolean;
    product: ProductConversationsEnum;
    status?: string;
}
