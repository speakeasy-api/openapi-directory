import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetJournalReportOuputRequest extends SpeakeasyBase {
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
     * Specific to JOURNAL report, a filter used to select the journal lines for the specified ledger target. E.g. [Default]
     */
    ledgerTarget: string;
    /**
     * The pay frequency option. E.g. Monthly
     */
    payFrequency: string;
    /**
     * The tax period number.
     */
    taxPeriod?: string;
    /**
     * The tax year. E.g. 2017 = 2017/18 year.
     */
    taxYear: string;
}
export declare class GetJournalReportOuputResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    /**
     * The result of the journal report execution
     */
    getJournalReportOuput200ApplicationJSONBinaryString?: Uint8Array;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
