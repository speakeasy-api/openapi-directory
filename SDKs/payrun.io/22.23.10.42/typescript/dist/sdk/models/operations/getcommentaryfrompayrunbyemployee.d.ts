import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCommentaryFromPayRunByEmployeeRequest extends SpeakeasyBase {
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
    /**
     * The pay runs' unique identifier. E.g. PR001
     */
    payRunId: string;
    /**
     * The pay schedules' unique identifier. E.g SCH001
     */
    payScheduleId: string;
}
export declare class GetCommentaryFromPayRunByEmployeeResponse extends SpeakeasyBase {
    /**
     * The commentary object.
     */
    commentary?: shared.Commentary;
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
