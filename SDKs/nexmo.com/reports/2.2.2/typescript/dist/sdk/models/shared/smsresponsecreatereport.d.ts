import { SpeakeasyBase } from "../../../internal/utils";
import { LinksCreateReport } from "./linkscreatereport";
import { DirectionEnum } from "./directionenum";
import { ProductSmsEnum } from "./productsmsenum";
import { RequestStatusCreateReportEnum } from "./requeststatuscreatereportenum";
import { SmsStatusEnum } from "./smsstatusenum";
/**
 * SMS
**/
export declare class SmsResponseCreateReport extends SpeakeasyBase {
    links?: LinksCreateReport;
    accountId: string;
    accountRef?: string;
    callbackUrl?: string;
    clientRef?: string;
    dateEnd?: Date;
    dateStart?: Date;
    direction: DirectionEnum;
    from?: string;
    includeMessage?: boolean;
    includeSubaccounts?: boolean;
    network?: string;
    product: ProductSmsEnum;
    receiveTime?: Date;
    requestId?: string;
    requestStatus?: RequestStatusCreateReportEnum;
    showConcatenated?: boolean;
    startTime?: Date;
    status?: SmsStatusEnum;
    to?: string;
}
