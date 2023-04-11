import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNextPayPeriodDatesReportOutputRequest extends SpeakeasyBase {
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The employer unique key. E.g. ER001
     */
    employerKey: string;
    /**
     * The pay schedule unique key. E.g. SCH001
     */
    payScheduleKey: string;
}
export declare class GetNextPayPeriodDatesReportOutputResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    /**
     * The result of the next pay period report execution
     */
    getNextPayPeriodDatesReportOutput200ApplicationJSONBinaryString?: Uint8Array;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
