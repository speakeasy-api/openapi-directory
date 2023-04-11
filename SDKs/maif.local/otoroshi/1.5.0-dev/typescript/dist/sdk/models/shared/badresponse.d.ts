import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An HTTP response that is not supposed to be returned by a service
 */
export declare class BadResponse extends SpeakeasyBase {
    /**
     * The body of the HTTP response
     */
    body: string;
    /**
     * The HTTP headers of the response
     */
    headers: Record<string, string>;
    /**
     * The HTTP status for the response
     */
    status: number;
}
