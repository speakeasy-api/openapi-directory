import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEmployeeSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class GetEmployeeRequest extends SpeakeasyBase {
    /**
     * Company Id
     */
    companyId: string;
    /**
     * Employee Id
     */
    employeeId: string;
}
export declare class GetEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully Retrieved
     */
    employee?: shared.Employee;
    /**
     * The employee does not exist
     */
    errors?: shared.ErrorT[];
}
