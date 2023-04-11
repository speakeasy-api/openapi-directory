import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for `SendCommandToDevice`.
 */
export declare class SendCommandToDeviceRequest extends SpeakeasyBase {
    /**
     * Required. The command data to send to the device.
     */
    binaryData?: string;
    /**
     * Optional subfolder for the command. If empty, the command will be delivered to the /devices/{device-id}/commands topic, otherwise it will be delivered to the /devices/{device-id}/commands/{subfolder} topic. Multi-level subfolders are allowed. This field must not have more than 256 characters, and must not contain any MQTT wildcards ("+" or "#") or null characters.
     */
    subfolder?: string;
}
