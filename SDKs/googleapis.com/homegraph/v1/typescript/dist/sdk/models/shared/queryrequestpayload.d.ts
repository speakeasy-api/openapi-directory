import { SpeakeasyBase } from "../../../internal/utils";
import { AgentDeviceId } from "./agentdeviceid";
/**
 * Payload containing device IDs.
 */
export declare class QueryRequestPayload extends SpeakeasyBase {
    /**
     * Third-party device IDs for which to get the device states.
     */
    devices?: AgentDeviceId[];
}
