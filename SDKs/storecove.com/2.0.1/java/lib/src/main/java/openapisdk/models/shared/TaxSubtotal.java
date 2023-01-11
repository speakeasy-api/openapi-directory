package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaxSubtotal
 * The total amount of tax of this type in the invoice.
**/
public class TaxSubtotal {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public TaxSubtotalTaxCategoryEnum category;
    public TaxSubtotal withCategory(TaxSubtotalTaxCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public CountryEnum country;
    public TaxSubtotal withCountry(CountryEnum country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentage")
    public Double percentage;
    public TaxSubtotal withPercentage(Double percentage) {
        this.percentage = percentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxAmount")
    public Double taxAmount;
    public TaxSubtotal withTaxAmount(Double taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
    @JsonProperty("taxableAmount")
    public Double taxableAmount;
    public TaxSubtotal withTaxableAmount(Double taxableAmount) {
        this.taxableAmount = taxableAmount;
        return this;
    }
}