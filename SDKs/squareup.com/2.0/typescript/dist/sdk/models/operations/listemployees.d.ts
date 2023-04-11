import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListEmployeesSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListEmployeesRequest extends SpeakeasyBase {
    /**
     * A pagination cursor to retrieve the next set of results for your
     *
     * @remarks
     * original query to the endpoint.
     */
    batchToken?: string;
    /**
     * If filtering results by their created_at field, the beginning of the requested reporting period, in ISO 8601 format.
     */
    beginCreatedAt?: string;
    /**
     * If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format
     */
    beginUpdatedAt?: string;
    /**
     * If filtering results by their created_at field, the end of the requested reporting period, in ISO 8601 format.
     */
    endCreatedAt?: string;
    /**
     * If filtering results by there updated_at field, the end of the requested reporting period, in ISO 8601 format.
     */
    endUpdatedAt?: string;
    /**
     * If provided, the endpoint returns only employee entities with the specified external_id.
     */
    externalId?: string;
    /**
     * The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
     */
    limit?: number;
    /**
     * The order in which employees are listed in the response, based on their created_at field.      Default value: ASC
     */
    order?: string;
    /**
     * If provided, the endpoint returns only employee entities with the specified status (ACTIVE or INACTIVE).
     */
    status?: string;
}
export declare class ListEmployeesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    v1Employees?: shared.V1Employee[];
}
