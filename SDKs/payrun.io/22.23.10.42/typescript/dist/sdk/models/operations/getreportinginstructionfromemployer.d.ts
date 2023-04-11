import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetReportingInstructionFromEmployerRequest extends SpeakeasyBase {
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The employers' unique identifier. E.g ER001
     */
    employerId: string;
    /**
     * The reporting instruction unique identifier. E.g. SERRPT001
     */
    reportingInstructionId: string;
}
export declare class GetReportingInstructionFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    /**
     * The reporting instruction object.
     */
    reportingInstruction?: shared.ReportingInstruction;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
