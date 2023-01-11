package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IsInstanceUpgradeableResponse
 * Response for checking if a notebook instance is upgradeable.
**/
public class IsInstanceUpgradeableResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upgradeImage")
    public String upgradeImage;
    public IsInstanceUpgradeableResponse withUpgradeImage(String upgradeImage) {
        this.upgradeImage = upgradeImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upgradeInfo")
    public String upgradeInfo;
    public IsInstanceUpgradeableResponse withUpgradeInfo(String upgradeInfo) {
        this.upgradeInfo = upgradeInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upgradeVersion")
    public String upgradeVersion;
    public IsInstanceUpgradeableResponse withUpgradeVersion(String upgradeVersion) {
        this.upgradeVersion = upgradeVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upgradeable")
    public Boolean upgradeable;
    public IsInstanceUpgradeableResponse withUpgradeable(Boolean upgradeable) {
        this.upgradeable = upgradeable;
        return this;
    }
}