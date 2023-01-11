package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch
 * The network device to be updated
**/
public class UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextUpgrade")
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade nextUpgrade;
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch withNextUpgrade(UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade nextUpgrade) {
        this.nextUpgrade = nextUpgrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participateInNextBetaRelease")
    public Boolean participateInNextBetaRelease;
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch withParticipateInNextBetaRelease(Boolean participateInNextBetaRelease) {
        this.participateInNextBetaRelease = participateInNextBetaRelease;
        return this;
    }
}