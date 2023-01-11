package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Plan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_scan_profiles")
    public String[] allowedScanProfiles;
    public Plan withAllowedScanProfiles(String[] allowedScanProfiles) {
        this.allowedScanProfiles = allowedScanProfiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charge_model")
    public PlanChargeModelEnum chargeModel;
    public Plan withChargeModel(PlanChargeModelEnum chargeModel) {
        this.chargeModel = chargeModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency_code")
    public String currencyCode;
    public Plan withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Plan withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Plan withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_trial")
    public Boolean isTrial;
    public Plan withIsTrial(Boolean isTrial) {
        this.isTrial = isTrial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Plan withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public String period;
    public Plan withPeriod(String period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period_unit")
    public BillingPeriodUnitEnum periodUnit;
    public Plan withPeriodUnit(BillingPeriodUnitEnum periodUnit) {
        this.periodUnit = periodUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Long price;
    public Plan withPrice(Long price) {
        this.price = price;
        return this;
    }
}