import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPapdisReportOuputRequest extends SpeakeasyBase {
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
     * Specific to PAPDIS report, specifies the business function that the sender is requesting. If left BLANK it will be assumed to be 0 (Enrol / Receive Contributions).
     */
    messageFunctionCode: string;
    /**
     * The pay schedule unique key. E.g. SCH001
     */
    payScheduleKey: string;
    /**
     * The payment date context for the report. E.g. 2018-04-30
     */
    paymentDate?: Date;
    /**
     * The pension scheme unique key. E.g. PENSCH001
     */
    pensionKey: string;
    /**
     * The tax year. E.g. 2017 = 2017/18 year.
     */
    taxYear: string;
    /**
     * The transform definition unique key. E.g. P45-Pdf
     */
    transformDefinitionKey?: string;
}
export declare class GetPapdisReportOuputResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    /**
     * The result of the PAPDIS report execution
     */
    getPapdisReportOuput200ApplicationJSONBinaryString?: Uint8Array;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
