package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PricingExpression
 * Expresses a mathematical pricing formula. For Example:- `usage_unit: GBy` `tiered_rates:` `[start_usage_amount: 20, unit_price: $10]` `[start_usage_amount: 100, unit_price: $5]` The above expresses a pricing formula where the first 20GB is free, the next 80GB is priced at $10 per GB followed by $5 per GB for additional usage.
**/
public class PricingExpression {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseUnit")
    public String baseUnit;
    public PricingExpression withBaseUnit(String baseUnit) {
        this.baseUnit = baseUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseUnitConversionFactor")
    public Double baseUnitConversionFactor;
    public PricingExpression withBaseUnitConversionFactor(Double baseUnitConversionFactor) {
        this.baseUnitConversionFactor = baseUnitConversionFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseUnitDescription")
    public String baseUnitDescription;
    public PricingExpression withBaseUnitDescription(String baseUnitDescription) {
        this.baseUnitDescription = baseUnitDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayQuantity")
    public Double displayQuantity;
    public PricingExpression withDisplayQuantity(Double displayQuantity) {
        this.displayQuantity = displayQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tieredRates")
    public TierRate[] tieredRates;
    public PricingExpression withTieredRates(TierRate[] tieredRates) {
        this.tieredRates = tieredRates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageUnit")
    public String usageUnit;
    public PricingExpression withUsageUnit(String usageUnit) {
        this.usageUnit = usageUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageUnitDescription")
    public String usageUnitDescription;
    public PricingExpression withUsageUnitDescription(String usageUnitDescription) {
        this.usageUnitDescription = usageUnitDescription;
        return this;
    }
}