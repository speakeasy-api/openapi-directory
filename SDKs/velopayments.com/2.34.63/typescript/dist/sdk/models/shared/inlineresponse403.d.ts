import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * The authentication does not have permissions to access the resource
 *
 * @remarks
 * This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions
 *
 */
export declare class InlineResponse403 extends SpeakeasyBase {
    /**
     * a unique identifier to track a request or related sequence of requests
     */
    correlationId?: string;
    /**
     * one or more errors
     */
    errors?: ErrorT[];
    /**
     * this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity
     */
    httpStatusCode?: number;
}
