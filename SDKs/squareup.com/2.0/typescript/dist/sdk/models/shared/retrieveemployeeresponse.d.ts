import { SpeakeasyBase } from "../../../internal/utils";
import { Employee } from "./employee";
import { ErrorT } from "./error";
/**
 * Success
 */
export declare class RetrieveEmployeeResponse extends SpeakeasyBase {
    /**
     * An employee object that is used by the external API.
     */
    employee?: Employee;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
