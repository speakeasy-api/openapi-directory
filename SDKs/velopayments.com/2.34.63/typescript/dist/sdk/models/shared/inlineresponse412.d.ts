import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * The request could not be completed as a precondition was not met
 *
 * @remarks
 *
 */
export declare class InlineResponse412 extends SpeakeasyBase {
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
