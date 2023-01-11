package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReinitializeActionConfiguration
 * The deserialized form of the <b>Reinitialize</b> service's request payload.
**/
public class ReinitializeActionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resetAlertActions")
    public Integer resetAlertActions;
    public ReinitializeActionConfiguration withResetAlertActions(Integer resetAlertActions) {
        this.resetAlertActions = resetAlertActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resetAlertAfterNTimes")
    public Integer resetAlertAfterNTimes;
    public ReinitializeActionConfiguration withResetAlertAfterNTimes(Integer resetAlertAfterNTimes) {
        this.resetAlertAfterNTimes = resetAlertAfterNTimes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resetDebugMode")
    public Integer resetDebugMode;
    public ReinitializeActionConfiguration withResetDebugMode(Integer resetDebugMode) {
        this.resetDebugMode = resetDebugMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resetDiscoveryAndPollingIntervals")
    public Integer resetDiscoveryAndPollingIntervals;
    public ReinitializeActionConfiguration withResetDiscoveryAndPollingIntervals(Integer resetDiscoveryAndPollingIntervals) {
        this.resetDiscoveryAndPollingIntervals = resetDiscoveryAndPollingIntervals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resetJavaSettings")
    public Integer resetJavaSettings;
    public ReinitializeActionConfiguration withResetJavaSettings(Integer resetJavaSettings) {
        this.resetJavaSettings = resetJavaSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resetOtherAlertSettings")
    public Integer resetOtherAlertSettings;
    public ReinitializeActionConfiguration withResetOtherAlertSettings(Integer resetOtherAlertSettings) {
        this.resetOtherAlertSettings = resetOtherAlertSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resetRemovedPausedObjectList")
    public Integer resetRemovedPausedObjectList;
    public ReinitializeActionConfiguration withResetRemovedPausedObjectList(Integer resetRemovedPausedObjectList) {
        this.resetRemovedPausedObjectList = resetRemovedPausedObjectList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resetReportSettings")
    public Integer resetReportSettings;
    public ReinitializeActionConfiguration withResetReportSettings(Integer resetReportSettings) {
        this.resetReportSettings = resetReportSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resetThresholds")
    public Integer resetThresholds;
    public ReinitializeActionConfiguration withResetThresholds(Integer resetThresholds) {
        this.resetThresholds = resetThresholds;
        return this;
    }
}