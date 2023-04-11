import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateEmployeeSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class UpdateEmployeeRequest extends SpeakeasyBase {
    /**
     * Company Id
     */
    companyId: string;
    /**
     * Employee Model
     */
    employee: shared.Employee;
    /**
     * Employee Id
     */
    employeeId: string;
}
export declare class UpdateEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    errors?: shared.ErrorT[];
}
