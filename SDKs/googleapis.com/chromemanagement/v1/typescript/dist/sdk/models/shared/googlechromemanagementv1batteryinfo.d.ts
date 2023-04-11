import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";
/**
 * Information about the battery. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
 */
export declare class GoogleChromeManagementV1BatteryInfo extends SpeakeasyBase {
    /**
     * Output only. Design capacity (mAmpere-hours).
     */
    designCapacity?: string;
    /**
     * Output only. Designed minimum output voltage (mV)
     */
    designMinVoltage?: number;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    manufactureDate?: GoogleTypeDate;
    /**
     * Output only. Battery manufacturer.
     */
    manufacturer?: string;
    /**
     * Output only. Battery serial number.
     */
    serialNumber?: string;
    /**
     * Output only. Technology of the battery. Example: Li-ion
     */
    technology?: string;
}
