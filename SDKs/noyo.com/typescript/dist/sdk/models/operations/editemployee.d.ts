import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditEmployeeRequest extends SpeakeasyBase {
    employeeEditRequest: shared.EmployeeEditRequest;
    /**
     * The unique identifier of the employee in Noyo
     */
    employeeId: string;
    /**
     * The current version identifier of the employee
     */
    version: string;
}
export declare class EditEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns the modified Employee
     */
    employeeResult?: shared.EmployeeResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
