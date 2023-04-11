import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEmployeeRevisionByNumberRequest extends SpeakeasyBase {
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
     * The revision number. E.g. 1
     */
    revisionNumber: string;
}
export declare class GetEmployeeRevisionByNumberResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The employee object.
     */
    employee?: shared.Employee;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
