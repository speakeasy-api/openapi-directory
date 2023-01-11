package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmissionsGramsPerPax
 * Grouped emissions per seating class results.
**/
public class EmissionsGramsPerPax {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business")
    public Integer business;
    public EmissionsGramsPerPax withBusiness(Integer business) {
        this.business = business;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("economy")
    public Integer economy;
    public EmissionsGramsPerPax withEconomy(Integer economy) {
        this.economy = economy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first")
    public Integer first;
    public EmissionsGramsPerPax withFirst(Integer first) {
        this.first = first;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("premiumEconomy")
    public Integer premiumEconomy;
    public EmissionsGramsPerPax withPremiumEconomy(Integer premiumEconomy) {
        this.premiumEconomy = premiumEconomy;
        return this;
    }
}