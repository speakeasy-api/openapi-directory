import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV2EmployeesSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GetV2EmployeesRequest extends SpeakeasyBase {
    /**
     * The token required to retrieve the specified page of results.
     */
    cursor?: string;
    /**
     * The number of employees to be returned on each page.
     */
    limit?: number;
    locationId?: string;
    /**
     * Specifies the EmployeeStatus to filter the employee by.
     */
    status?: string;
}
export declare class GetV2EmployeesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listEmployeesResponse?: shared.ListEmployeesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
