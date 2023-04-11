import { SpeakeasyBase } from "../../../internal/utils";
import { Employee } from "./employee";
import { ErrorT } from "./error";
/**
 * Success
 */
export declare class ListEmployeesResponse extends SpeakeasyBase {
    /**
     * The token to be used to retrieve the next page of results.
     */
    cursor?: string;
    employees?: Employee[];
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
