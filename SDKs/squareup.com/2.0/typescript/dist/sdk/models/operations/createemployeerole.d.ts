import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateEmployeeRoleSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateEmployeeRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    v1EmployeeRole?: shared.V1EmployeeRole;
}
