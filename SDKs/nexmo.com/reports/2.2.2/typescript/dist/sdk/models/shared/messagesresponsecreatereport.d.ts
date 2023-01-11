import { SpeakeasyBase } from "../../../internal/utils";
import { LinksCreateReport } from "./linkscreatereport";
import { DirectionEnum } from "./directionenum";
import { ProductMessagesEnum } from "./productmessagesenum";
import { RequestStatusCreateReportEnum } from "./requeststatuscreatereportenum";
/**
 * Messages
**/
export declare class MessagesResponseCreateReport extends SpeakeasyBase {
    links?: LinksCreateReport;
    accountId: string;
    callbackUrl?: string;
    dateEnd?: Date;
    dateStart?: Date;
    direction: DirectionEnum;
    from?: string;
    id?: string;
    includeMessage?: boolean;
    includeSubaccounts?: boolean;
    product: ProductMessagesEnum;
    receiveTime?: Date;
    requestId?: string;
    requestStatus?: RequestStatusCreateReportEnum;
    startTime?: Date;
    to?: string;
}
