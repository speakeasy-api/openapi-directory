package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow
 * Upgrade window for devices in network
**/
public class UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayOfWeek")
    public UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum dayOfWeek;
    public UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow withDayOfWeek(UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hourOfDay")
    public UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum hourOfDay;
    public UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow withHourOfDay(UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum hourOfDay) {
        this.hourOfDay = hourOfDay;
        return this;
    }
}