package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RateRequestBody
 * A rate request body
**/
public class RateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calculate_tax_amount")
    public Boolean calculateTaxAmount;
    public RateRequestBody withCalculateTaxAmount(Boolean calculateTaxAmount) {
        this.calculateTaxAmount = calculateTaxAmount;
        return this;
    }
    @JsonProperty("carrier_ids")
    public String[] carrierIds;
    public RateRequestBody withCarrierIds(String[] carrierIds) {
        this.carrierIds = carrierIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("package_types")
    public String[] packageTypes;
    public RateRequestBody withPackageTypes(String[] packageTypes) {
        this.packageTypes = packageTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferred_currency")
    public CurrencyEnum preferredCurrency;
    public RateRequestBody withPreferredCurrency(CurrencyEnum preferredCurrency) {
        this.preferredCurrency = preferredCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_codes")
    public String[] serviceCodes;
    public RateRequestBody withServiceCodes(String[] serviceCodes) {
        this.serviceCodes = serviceCodes;
        return this;
    }
}