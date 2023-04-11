import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetActivePayInstructionsReportOutputRequest extends SpeakeasyBase {
    /**
     * The active date to consider. E.g 2017-04-05
     */
    activeOn?: Date;
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The employee unique key. E.g. EE001
     */
    employeeKey: string;
    /**
     * The employer unique key. E.g. ER001
     */
    employerKey: string;
    /**
     * The lower filter date. E.g 2016-04-06
     */
    fromDate: Date;
    /**
     * The upper filter date. E.g 2017-04-05
     */
    toDate?: Date;
    /**
     * the data type to filter on. E.g. TaxPayInstruction
     */
    type?: string;
}
export declare class GetActivePayInstructionsReportOutputResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    /**
     * The result of the active pay instructions report execution
     */
    getActivePayInstructionsReportOutput200ApplicationJSONBinaryString?: Uint8Array;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
