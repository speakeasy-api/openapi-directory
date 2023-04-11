import { SpeakeasyBase } from "../../../internal/utils";
/**
 * When set to <em>1</em>, removes all manually set Alert Actions and reverts to basic default actions i.e. trigger a PATROL event and annotate a parameter graph.
 */
export declare enum ReinitializeActionConfigurationResetAlertActionsEnum {
    Zero = "0",
    One = "1"
}
/**
 * When set to <em>1</em>, resets the number of times thresholds can be breached before triggering an alert to their default values (1 time) for numeric, discrete, connector status and present parameters.
 */
export declare enum ReinitializeActionConfigurationResetAlertAfterNTimesEnum {
    Zero = "0",
    One = "1"
}
/**
 * When set to <em>1</em>, deactivates the debug mode when it was manually enabled.
 */
export declare enum ReinitializeActionConfigurationResetDebugModeEnum {
    Zero = "0",
    One = "1"
}
/**
 * When set to <em>1</em>, removes all user-defined frequencies for discovery and polling processes to their default values (respectively 1 hour and 2 minutes).
 */
export declare enum ReinitializeActionConfigurationResetDiscoveryAndPollingIntervalsEnum {
    Zero = "0",
    One = "1"
}
/**
 * When set to <em>1</em>, removes the custom Java settings (path and credentials). The KM will try to automatically find a suitable JRE.
 */
export declare enum ReinitializeActionConfigurationResetJavaSettingsEnum {
    Zero = "0",
    One = "1"
}
/**
 * When set to <em>1</em>, reverts any manually performed configuration changes to the default Hardware Sentry values.
 */
export declare enum ReinitializeActionConfigurationResetOtherAlertSettingsEnum {
    Zero = "0",
    One = "1"
}
/**
 * When set to <em>1</em>, reactivates the monitoring of all paused or removed objects.
 */
export declare enum ReinitializeActionConfigurationResetRemovedPausedObjectListEnum {
    Zero = "0",
    One = "1"
}
/**
 * When set to <em>1</em>, clears the report schedule.
 */
export declare enum ReinitializeActionConfigurationResetReportSettingsEnum {
    Zero = "0",
    One = "1"
}
/**
 * When set to <em>1</em>, resets all thresholds.
 */
export declare enum ReinitializeActionConfigurationResetThresholdsEnum {
    Zero = "0",
    One = "1"
}
/**
 * The deserialized form of the <b>Reinitialize</b> service's request payload.
 */
export declare class ReinitializeActionConfiguration extends SpeakeasyBase {
    /**
     * When set to <em>1</em>, removes all manually set Alert Actions and reverts to basic default actions i.e. trigger a PATROL event and annotate a parameter graph.
     */
    resetAlertActions?: ReinitializeActionConfigurationResetAlertActionsEnum;
    /**
     * When set to <em>1</em>, resets the number of times thresholds can be breached before triggering an alert to their default values (1 time) for numeric, discrete, connector status and present parameters.
     */
    resetAlertAfterNTimes?: ReinitializeActionConfigurationResetAlertAfterNTimesEnum;
    /**
     * When set to <em>1</em>, deactivates the debug mode when it was manually enabled.
     */
    resetDebugMode?: ReinitializeActionConfigurationResetDebugModeEnum;
    /**
     * When set to <em>1</em>, removes all user-defined frequencies for discovery and polling processes to their default values (respectively 1 hour and 2 minutes).
     */
    resetDiscoveryAndPollingIntervals?: ReinitializeActionConfigurationResetDiscoveryAndPollingIntervalsEnum;
    /**
     * When set to <em>1</em>, removes the custom Java settings (path and credentials). The KM will try to automatically find a suitable JRE.
     */
    resetJavaSettings?: ReinitializeActionConfigurationResetJavaSettingsEnum;
    /**
     * When set to <em>1</em>, reverts any manually performed configuration changes to the default Hardware Sentry values.
     */
    resetOtherAlertSettings?: ReinitializeActionConfigurationResetOtherAlertSettingsEnum;
    /**
     * When set to <em>1</em>, reactivates the monitoring of all paused or removed objects.
     */
    resetRemovedPausedObjectList?: ReinitializeActionConfigurationResetRemovedPausedObjectListEnum;
    /**
     * When set to <em>1</em>, clears the report schedule.
     */
    resetReportSettings?: ReinitializeActionConfigurationResetReportSettingsEnum;
    /**
     * When set to <em>1</em>, resets all thresholds.
     */
    resetThresholds?: ReinitializeActionConfigurationResetThresholdsEnum;
}
