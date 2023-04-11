import { SpeakeasyBase } from "../../../internal/utils";
import { EventType } from "./eventtype";
/**
 * A representation of the Provider resource.
 */
export declare class Provider extends SpeakeasyBase {
    /**
     * Output only. Human friendly name for the Provider. For example "Cloud Storage".
     */
    displayName?: string;
    /**
     * Output only. Event types for this provider.
     */
    eventTypes?: EventType[];
    /**
     * Output only. In `projects/{project}/locations/{location}/providers/{provider_id}` format.
     */
    name?: string;
}
