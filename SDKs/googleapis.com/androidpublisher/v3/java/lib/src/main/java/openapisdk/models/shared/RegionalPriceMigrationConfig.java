package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegionalPriceMigrationConfig
 * Configuration for a price migration.
**/
public class RegionalPriceMigrationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oldestAllowedPriceVersionTime")
    public String oldestAllowedPriceVersionTime;
    public RegionalPriceMigrationConfig withOldestAllowedPriceVersionTime(String oldestAllowedPriceVersionTime) {
        this.oldestAllowedPriceVersionTime = oldestAllowedPriceVersionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionCode")
    public String regionCode;
    public RegionalPriceMigrationConfig withRegionCode(String regionCode) {
        this.regionCode = regionCode;
        return this;
    }
}