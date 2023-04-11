import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV2EmployeesIdSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GetV2EmployeesIdRequest extends SpeakeasyBase {
    /**
     * UUID for the employee that was requested.
     */
    id: string;
}
export declare class GetV2EmployeesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveEmployeeResponse?: shared.RetrieveEmployeeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
