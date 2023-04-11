import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateEmployeeSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class UpdateEmployeeRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    v1Employee: shared.V1Employee;
    /**
     * The ID of the role to modify.
     */
    employeeId: string;
}
export declare class UpdateEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    v1Employee?: shared.V1Employee;
}
