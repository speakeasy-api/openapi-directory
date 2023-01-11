import { SpeakeasyBase } from "../../../internal/utils";
import { LinksCreateReport } from "./linkscreatereport";
import { ProductNiEnum } from "./productnienum";
import { RequestStatusCreateReportEnum } from "./requeststatuscreatereportenum";
/**
 * Number Insight
**/
export declare class NumberInsightResponseCreateReport extends SpeakeasyBase {
    links?: LinksCreateReport;
    accountId?: string;
    callbackUrl?: string;
    dateEnd?: Date;
    dateStart?: Date;
    includeSubaccounts?: boolean;
    network?: string;
    number?: string;
    product?: ProductNiEnum;
    receiveTime?: Date;
    requestId?: string;
    requestStatus?: RequestStatusCreateReportEnum;
    startTime?: Date;
}
