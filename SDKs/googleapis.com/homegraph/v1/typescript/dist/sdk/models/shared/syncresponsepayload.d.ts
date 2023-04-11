import { SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
/**
 * Payload containing device information.
 */
export declare class SyncResponsePayload extends SpeakeasyBase {
    /**
     * Third-party user ID
     */
    agentUserId?: string;
    /**
     * Devices associated with the third-party user.
     */
    devices?: Device[];
}
