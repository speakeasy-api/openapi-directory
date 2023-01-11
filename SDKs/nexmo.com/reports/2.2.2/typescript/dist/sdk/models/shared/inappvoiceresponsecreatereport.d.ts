import { SpeakeasyBase } from "../../../internal/utils";
import { LinksCreateReport } from "./linkscreatereport";
import { ProductInAppVoiceEnum } from "./productinappvoiceenum";
import { RequestStatusCreateReportEnum } from "./requeststatuscreatereportenum";
/**
 * In App Voice
**/
export declare class InAppVoiceResponseCreateReport extends SpeakeasyBase {
    links?: LinksCreateReport;
    accountId?: string;
    callbackUrl?: string;
    conversationId?: string;
    dateEnd?: Date;
    dateStart?: Date;
    includeSubaccounts?: boolean;
    product?: ProductInAppVoiceEnum;
    receiveTime?: Date;
    requestId?: string;
    requestStatus?: RequestStatusCreateReportEnum;
    startTime?: Date;
}
