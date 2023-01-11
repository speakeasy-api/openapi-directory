package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventorySizeTargeting
 * Represents the size of an ad unit that can be targeted on an ad request. It only applies to Private Auction, AdX Preferred Deals and Auction Packages. This targeting does not apply to Programmatic Guaranteed and Preferred Deals in Ad Manager.
**/
public class InventorySizeTargeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedInventorySizes")
    public AdSize[] excludedInventorySizes;
    public InventorySizeTargeting withExcludedInventorySizes(AdSize[] excludedInventorySizes) {
        this.excludedInventorySizes = excludedInventorySizes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetedInventorySizes")
    public AdSize[] targetedInventorySizes;
    public InventorySizeTargeting withTargetedInventorySizes(AdSize[] targetedInventorySizes) {
        this.targetedInventorySizes = targetedInventorySizes;
        return this;
    }
}