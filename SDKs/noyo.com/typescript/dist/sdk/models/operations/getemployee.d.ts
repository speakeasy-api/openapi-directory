import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEmployeeRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the employee in Noyo
     */
    employeeId: string;
}
export declare class GetEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns a single Employee
     */
    employeeResult?: shared.EmployeeResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
