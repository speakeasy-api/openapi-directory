import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings for trial offers.
 */
export declare class GoogleCloudChannelV1TrialSettings extends SpeakeasyBase {
    /**
     * Date when the trial ends. The value is in milliseconds using the UNIX Epoch format. See an example [Epoch converter](https://www.epochconverter.com).
     */
    endTime?: string;
    /**
     * Determines if the entitlement is in a trial or not: * `true` - The entitlement is in trial. * `false` - The entitlement is not in trial.
     */
    trial?: boolean;
}
