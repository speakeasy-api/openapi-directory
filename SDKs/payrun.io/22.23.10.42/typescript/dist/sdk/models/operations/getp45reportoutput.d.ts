import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetP45ReportOutputRequest extends SpeakeasyBase {
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
     * The transform definition unique key. E.g. P45-Pdf
     */
    transformDefinitionKey?: string;
}
export declare class GetP45ReportOutputResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    /**
     * The result of the P45 report execution
     */
    getP45ReportOutput200ApplicationJSONBinaryString?: Uint8Array;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
