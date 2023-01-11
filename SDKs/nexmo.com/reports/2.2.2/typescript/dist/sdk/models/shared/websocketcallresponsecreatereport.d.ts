import { SpeakeasyBase } from "../../../internal/utils";
import { LinksCreateReport } from "./linkscreatereport";
import { ProductWebsocketEnum } from "./productwebsocketenum";
import { RequestStatusCreateReportEnum } from "./requeststatuscreatereportenum";
/**
 * WebSocket Call
**/
export declare class WebsocketCallResponseCreateReport extends SpeakeasyBase {
    links?: LinksCreateReport;
    accountId?: string;
    callbackUrl?: string;
    dateEnd?: Date;
    dateStart?: Date;
    includeSubaccounts?: boolean;
    product?: ProductWebsocketEnum;
    receiveTime?: Date;
    requestId?: string;
    requestStatus?: RequestStatusCreateReportEnum;
    startTime?: Date;
    status?: string;
}
