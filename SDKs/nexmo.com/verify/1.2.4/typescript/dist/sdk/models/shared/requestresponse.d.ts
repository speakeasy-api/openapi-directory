import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class RequestResponse extends SpeakeasyBase {
    /**
     * The unique ID of the Verify request. You need this `request_id` for the Verify check.
     */
    requestId?: string;
    /**
     * Indicates the outcome of the request; zero is success
     */
    status?: string;
}
