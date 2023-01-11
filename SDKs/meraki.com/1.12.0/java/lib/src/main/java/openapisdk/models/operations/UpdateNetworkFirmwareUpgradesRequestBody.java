package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkFirmwareUpgradesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("products")
    public UpdateNetworkFirmwareUpgradesRequestBodyProducts products;
    public UpdateNetworkFirmwareUpgradesRequestBody withProducts(UpdateNetworkFirmwareUpgradesRequestBodyProducts products) {
        this.products = products;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public UpdateNetworkFirmwareUpgradesRequestBody withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upgradeWindow")
    public UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow upgradeWindow;
    public UpdateNetworkFirmwareUpgradesRequestBody withUpgradeWindow(UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow upgradeWindow) {
        this.upgradeWindow = upgradeWindow;
        return this;
    }
}