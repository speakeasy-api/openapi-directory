import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * An error response body
**/
export declare class ErrorResponseBody extends SpeakeasyBase {
    errors: ErrorT[];
    requestId: string;
}
