import { SpeakeasyBase } from "../../../internal/utils";
import { DirectionEnum } from "./directionenum";
import { IncludeSubaccountsEnum } from "./includesubaccountsenum";
import { LinksCreateReport } from "./linkscreatereport";
import { ProductMessagesEnum } from "./productmessagesenum";
import { RequestStatusCreateReportEnum } from "./requeststatuscreatereportenum";
/**
 * Messages
 */
export declare class MessagesResponseCreateReport extends SpeakeasyBase {
    links?: LinksCreateReport;
    /**
     * The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.
     */
    accountId: string;
    /**
     * URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).
     */
    callbackUrl?: string;
    /**
     * ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.
     *
     * @remarks
     *
     */
    dateEnd?: Date;
    /**
     * ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.
     *
     * @remarks
     *
     */
    dateStart?: Date;
    /**
     * Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.
     */
    direction: DirectionEnum;
    /**
     * Request from this number.
     */
    from?: string;
    /**
     * Search only messages with the specified uuid.
     */
    id?: string;
    /**
     * Include the text of messages in the report.
     */
    includeMessage?: boolean;
    /**
     * Whether to include subaccounts or not.
     */
    includeSubaccounts?: IncludeSubaccountsEnum;
    /**
     * Which product you wish to generate a report for.
     */
    product: ProductMessagesEnum;
    /**
     * Time at which the report request was received by the service.
     */
    receiveTime?: Date;
    /**
     * UUID of the request.
     */
    requestId?: string;
    /**
     * Status of the request.
     */
    requestStatus?: RequestStatusCreateReportEnum;
    /**
     * Time at which the report processing of the report has started.
     */
    startTime?: Date;
    /**
     * Request to this number.
     */
    to?: string;
}
