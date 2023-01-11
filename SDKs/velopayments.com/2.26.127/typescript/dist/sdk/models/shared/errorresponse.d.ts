import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * Error response returned by all error conditions in Velo Services
**/
export declare class ErrorResponse extends SpeakeasyBase {
    correlationId?: string;
    errors?: ErrorT[];
    httpStatusCode?: number;
}
