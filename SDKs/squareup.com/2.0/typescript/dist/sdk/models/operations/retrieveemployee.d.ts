import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveEmployeeSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveEmployeeRequest extends SpeakeasyBase {
    /**
     * The employee's ID.
     */
    employeeId: string;
}
export declare class RetrieveEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    v1Employee?: shared.V1Employee;
}
