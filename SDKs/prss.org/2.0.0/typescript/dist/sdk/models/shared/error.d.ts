import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Standard error response. See the [Problem Details for HTTP APIs](https://datatracker.ietf.org/doc/html/rfc7807) for more details.
 */
export declare class ErrorT extends SpeakeasyBase {
    /**
     * The occurrence-specific problem description.
     */
    detail?: string;
    /**
     * The status code of the error.
     */
    status?: number;
    /**
     * The general problem description.
     */
    title?: string;
}
