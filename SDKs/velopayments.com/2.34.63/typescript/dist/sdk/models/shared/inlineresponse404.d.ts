import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * The resource was not found or is no longer available
 *
 * @remarks
 *
 */
export declare class InlineResponse404 extends SpeakeasyBase {
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
