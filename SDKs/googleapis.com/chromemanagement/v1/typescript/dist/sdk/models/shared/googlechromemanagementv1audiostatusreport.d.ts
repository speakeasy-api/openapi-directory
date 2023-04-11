import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceAudioStatus](https://chromeenterprise.google/policies/#ReportDeviceAudioStatus) * Data Collection Frequency: 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
 */
export declare class GoogleChromeManagementV1AudioStatusReport extends SpeakeasyBase {
    /**
     * Output only. Active input device's name.
     */
    inputDevice?: string;
    /**
     * Output only. Active input device's gain in [0, 100].
     */
    inputGain?: number;
    /**
     * Output only. Is active input device mute or not.
     */
    inputMute?: boolean;
    /**
     * Output only. Active output device's name.
     */
    outputDevice?: string;
    /**
     * Output only. Is active output device mute or not.
     */
    outputMute?: boolean;
    /**
     * Output only. Active output device's volume in [0, 100].
     */
    outputVolume?: number;
    /**
     * Output only. Timestamp of when the sample was collected on device.
     */
    reportTime?: string;
}
