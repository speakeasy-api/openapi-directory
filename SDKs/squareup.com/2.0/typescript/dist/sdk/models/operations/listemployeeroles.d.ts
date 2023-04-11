import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListEmployeeRolesSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListEmployeeRolesRequest extends SpeakeasyBase {
    /**
     * A pagination cursor to retrieve the next set of results for your
     *
     * @remarks
     * original query to the endpoint.
     */
    batchToken?: string;
    /**
     * The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
     */
    limit?: number;
    /**
     * The order in which employees are listed in the response, based on their created_at field.Default value: ASC
     */
    order?: string;
}
export declare class ListEmployeeRolesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    v1EmployeeRoles?: shared.V1EmployeeRole[];
}
