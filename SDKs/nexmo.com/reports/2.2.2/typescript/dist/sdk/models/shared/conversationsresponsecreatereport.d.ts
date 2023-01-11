import { SpeakeasyBase } from "../../../internal/utils";
import { LinksCreateReport } from "./linkscreatereport";
import { ProductConversationsEnum } from "./productconversationsenum";
import { RequestStatusCreateReportEnum } from "./requeststatuscreatereportenum";
/**
 * Conversations
**/
export declare class ConversationsResponseCreateReport extends SpeakeasyBase {
    links?: LinksCreateReport;
    accountId?: string;
    callbackUrl?: string;
    conversationId?: string;
    dateEnd?: Date;
    dateStart?: Date;
    includeSubaccounts?: boolean;
    product?: ProductConversationsEnum;
    receiveTime?: Date;
    requestId?: string;
    requestStatus?: RequestStatusCreateReportEnum;
    startTime?: Date;
    status?: string;
}
