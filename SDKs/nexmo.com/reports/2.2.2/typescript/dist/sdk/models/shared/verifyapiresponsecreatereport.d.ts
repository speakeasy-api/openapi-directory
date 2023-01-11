import { SpeakeasyBase } from "../../../internal/utils";
import { LinksCreateReport } from "./linkscreatereport";
import { ProductVerifyEnum } from "./productverifyenum";
import { RequestStatusCreateReportEnum } from "./requeststatuscreatereportenum";
/**
 * Verify
**/
export declare class VerifyApiResponseCreateReport extends SpeakeasyBase {
    links?: LinksCreateReport;
    accountId?: string;
    callbackUrl?: string;
    dateEnd?: Date;
    dateStart?: Date;
    includeSubaccounts?: boolean;
    network?: string;
    product?: ProductVerifyEnum;
    receiveTime?: Date;
    requestId?: string;
    requestStatus?: RequestStatusCreateReportEnum;
    startTime?: Date;
    to?: string;
}
