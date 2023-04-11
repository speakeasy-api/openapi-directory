import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveEmployeeRoleSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveEmployeeRoleRequest extends SpeakeasyBase {
    /**
     * The role's ID.
     */
    roleId: string;
}
export declare class RetrieveEmployeeRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    v1EmployeeRole?: shared.V1EmployeeRole;
}
