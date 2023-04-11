import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCompanyEmployeesEmployeeIdRequest extends SpeakeasyBase {
    /**
     * Numeric `id` of the employee
     */
    employeeId: number;
}
export declare class GetCompanyEmployeesEmployeeIdResponse extends SpeakeasyBase {
    contentType: string;
    employeeResponse?: shared.EmployeeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
