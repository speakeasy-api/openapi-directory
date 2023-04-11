import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateEmployeeRequest extends SpeakeasyBase {
    employeeCreateRequest: shared.EmployeeCreateRequest;
    /**
     * The unique identifier of the group in Noyo
     */
    groupId: string;
}
export declare class CreateEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns the new Employee
     */
    employeeResult?: shared.EmployeeResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
