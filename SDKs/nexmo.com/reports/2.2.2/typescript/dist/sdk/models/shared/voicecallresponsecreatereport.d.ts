import { SpeakeasyBase } from "../../../internal/utils";
import { LinksCreateReport } from "./linkscreatereport";
import { DirectionEnum } from "./directionenum";
import { ProductVoiceEnum } from "./productvoiceenum";
import { RequestStatusCreateReportEnum } from "./requeststatuscreatereportenum";
import { VoiceStatusEnum } from "./voicestatusenum";
/**
 * Voice Call
**/
export declare class VoiceCallResponseCreateReport extends SpeakeasyBase {
    links?: LinksCreateReport;
    accountId?: string;
    callbackUrl?: string;
    dateEnd?: Date;
    dateStart?: Date;
    direction?: DirectionEnum;
    from?: string;
    includeSubaccounts?: boolean;
    network?: string;
    product?: ProductVoiceEnum;
    receiveTime?: Date;
    requestId?: string;
    requestStatus?: RequestStatusCreateReportEnum;
    startTime?: Date;
    status?: VoiceStatusEnum;
    to?: string;
}
