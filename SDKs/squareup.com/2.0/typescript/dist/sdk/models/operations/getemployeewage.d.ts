import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEmployeeWageSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GetEmployeeWageRequest extends SpeakeasyBase {
    /**
     * The UUID for the `EmployeeWage` being retrieved.
     */
    id: string;
}
export declare class GetEmployeeWageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getEmployeeWageResponse?: shared.GetEmployeeWageResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
