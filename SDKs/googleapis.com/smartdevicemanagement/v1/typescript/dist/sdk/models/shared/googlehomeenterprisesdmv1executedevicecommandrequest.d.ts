import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for SmartDeviceManagementService.ExecuteDeviceCommand
 */
export declare class GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest extends SpeakeasyBase {
    /**
     * The command name to execute, represented by the fully qualified protobuf message name.
     */
    command?: string;
    /**
     * The command message to execute, represented as a Struct.
     */
    params?: Record<string, any>;
}
