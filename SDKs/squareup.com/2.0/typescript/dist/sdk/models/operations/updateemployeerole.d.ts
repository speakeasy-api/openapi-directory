import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateEmployeeRoleSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class UpdateEmployeeRoleRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    v1EmployeeRole: shared.V1EmployeeRole;
    /**
     * The ID of the role to modify.
     */
    roleId: string;
}
export declare class UpdateEmployeeRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    v1EmployeeRole?: shared.V1EmployeeRole;
}
