import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The response to the CheckIn method.
 */
export declare class CheckInResponse extends SpeakeasyBase {
    /**
     * The deadline by which the worker must request an extension. The backend will allow for network transmission time and other delays, but the worker must attempt to transmit the extension request no later than the deadline.
     */
    deadline?: string;
    /**
     * Feature configuration for the operation.
     */
    features?: Record<string, any>;
    /**
     * The metadata that describes the operation assigned to the worker.
     */
    metadata?: Record<string, any>;
}
