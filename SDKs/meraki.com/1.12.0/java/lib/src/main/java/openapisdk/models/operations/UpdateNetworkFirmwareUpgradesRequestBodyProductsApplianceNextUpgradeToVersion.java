package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion
 * The version to be updated to
**/
public class UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion withId(String id) {
        this.id = id;
        return this;
    }
}