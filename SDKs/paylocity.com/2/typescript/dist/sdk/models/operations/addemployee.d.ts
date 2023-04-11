import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddEmployeeSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class AddEmployeeRequest extends SpeakeasyBase {
    /**
     * Company Id
     */
    companyId: string;
    /**
     * Employee Model
     */
    employee: shared.Employee;
}
export declare class AddEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully added
     */
    employeeIdResponse?: shared.EmployeeIdResponse;
    /**
     * Bad Request
     */
    errors?: shared.ErrorT[];
}
