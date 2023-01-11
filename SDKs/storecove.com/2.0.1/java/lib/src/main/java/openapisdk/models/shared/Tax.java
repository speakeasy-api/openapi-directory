package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Tax {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public Tax withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public TaxTaxCategoryEnum category;
    public Tax withCategory(TaxTaxCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonProperty("country")
    public CountryEnum country;
    public Tax withCountry(CountryEnum country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentage")
    public Double percentage;
    public Tax withPercentage(Double percentage) {
        this.percentage = percentage;
        return this;
    }
}