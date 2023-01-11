import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { ProductConversationsEnum } from "./productconversationsenum";
import { RequestStatusEnum } from "./requeststatusenum";
/**
 * Conversations
**/
export declare class ConversationsResponseGetReport extends SpeakeasyBase {
    links?: Links;
    accountId?: string;
    callbackUrl?: string;
    conversationId?: string;
    dateEnd?: Date;
    dateStart?: Date;
    includeSubaccounts?: boolean;
    itemsCount?: number;
    product?: ProductConversationsEnum;
    receiveTime?: Date;
    requestId?: string;
    requestStatus?: RequestStatusEnum;
    startTime?: Date;
    status?: string;
}
