import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1TelemetryUserDevice } from "./googlechromemanagementv1telemetryuserdevice";
/**
 * Telemetry data collected from a managed user.
 */
export declare class GoogleChromeManagementV1TelemetryUser extends SpeakeasyBase {
    /**
     * G Suite Customer whose enterprise enrolled the device.
     */
    customer?: string;
    /**
     * Resource name of the user.
     */
    name?: string;
    /**
     * Organization unit of the user.
     */
    orgUnitId?: string;
    /**
     * Telemetry data collected from a managed user and device.
     */
    userDevice?: GoogleChromeManagementV1TelemetryUserDevice[];
    /**
     * Email address of the user.
     */
    userEmail?: string;
    /**
     * Directory ID of the user.
     */
    userId?: string;
}
