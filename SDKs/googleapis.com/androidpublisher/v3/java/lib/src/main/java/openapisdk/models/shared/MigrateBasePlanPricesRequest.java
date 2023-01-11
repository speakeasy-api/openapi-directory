package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MigrateBasePlanPricesRequest
 * Request message for MigrateBasePlanPrices.
**/
public class MigrateBasePlanPricesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionalPriceMigrations")
    public RegionalPriceMigrationConfig[] regionalPriceMigrations;
    public MigrateBasePlanPricesRequest withRegionalPriceMigrations(RegionalPriceMigrationConfig[] regionalPriceMigrations) {
        this.regionalPriceMigrations = regionalPriceMigrations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionsVersion")
    public RegionsVersion regionsVersion;
    public MigrateBasePlanPricesRequest withRegionsVersion(RegionsVersion regionsVersion) {
        this.regionsVersion = regionsVersion;
        return this;
    }
}