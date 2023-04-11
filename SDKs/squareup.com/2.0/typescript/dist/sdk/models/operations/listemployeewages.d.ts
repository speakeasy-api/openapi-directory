import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListEmployeeWagesSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListEmployeeWagesRequest extends SpeakeasyBase {
    /**
     * A pointer to the next page of `EmployeeWage` results to fetch.
     */
    cursor?: string;
    /**
     * Filter the returned wages to only those that are associated with the specified employee.
     */
    employeeId?: string;
    /**
     * The maximum number of `EmployeeWage` results to return per page. The number can range between
     *
     * @remarks
     * 1 and 200. The default is 200.
     */
    limit?: number;
}
export declare class ListEmployeeWagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listEmployeeWagesResponse?: shared.ListEmployeeWagesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
