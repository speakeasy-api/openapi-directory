import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutReportDefinitionRequest extends SpeakeasyBase {
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The report definition object.
     */
    reportDefinition: shared.ReportDefinition;
    /**
     * The report definition unique identifier.
     */
    reportDefinitionId: string;
}
export declare class PutReportDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    /**
     * The report definition object.
     */
    reportDefinition?: shared.ReportDefinition;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
