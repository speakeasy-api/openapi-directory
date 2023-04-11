import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAEAssessmentFromEmployeeRequest extends SpeakeasyBase {
    /**
     * The auto enrolment assessment unique identifier. E.g. AE001
     */
    aeAssessmentId: string;
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The employees' unique identifier. E.g EE001
     */
    employeeId: string;
    /**
     * The employers' unique identifier. E.g ER001
     */
    employerId: string;
}
export declare class GetAEAssessmentFromEmployeeResponse extends SpeakeasyBase {
    /**
     * The a e assessment object.
     */
    aeAssessment?: shared.AEAssessment;
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
