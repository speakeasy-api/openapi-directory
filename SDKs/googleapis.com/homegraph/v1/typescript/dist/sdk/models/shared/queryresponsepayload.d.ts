import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Payload containing device states information.
 */
export declare class QueryResponsePayload extends SpeakeasyBase {
    /**
     * States of the devices. Map of third-party device ID to struct of device states.
     */
    devices?: Record<string, Record<string, any>>;
}
