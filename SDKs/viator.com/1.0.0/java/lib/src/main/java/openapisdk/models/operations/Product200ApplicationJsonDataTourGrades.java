package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Product200ApplicationJsonDataTourGrades {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public Product200ApplicationJsonDataTourGrades withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultLanguageCode")
    public String defaultLanguageCode;
    public Product200ApplicationJsonDataTourGrades withDefaultLanguageCode(String defaultLanguageCode) {
        this.defaultLanguageCode = defaultLanguageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gradeCode")
    public String gradeCode;
    public Product200ApplicationJsonDataTourGrades withGradeCode(String gradeCode) {
        this.gradeCode = gradeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gradeDepartureTime")
    public String gradeDepartureTime;
    public Product200ApplicationJsonDataTourGrades withGradeDepartureTime(String gradeDepartureTime) {
        this.gradeDepartureTime = gradeDepartureTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gradeDescription")
    public String gradeDescription;
    public Product200ApplicationJsonDataTourGrades withGradeDescription(String gradeDescription) {
        this.gradeDescription = gradeDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gradeTitle")
    public String gradeTitle;
    public Product200ApplicationJsonDataTourGrades withGradeTitle(String gradeTitle) {
        this.gradeTitle = gradeTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("langServices")
    public java.util.Map<String, String> langServices;
    public Product200ApplicationJsonDataTourGrades withLangServices(java.util.Map<String, String> langServices) {
        this.langServices = langServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantNetPriceFrom")
    public Double merchantNetPriceFrom;
    public Product200ApplicationJsonDataTourGrades withMerchantNetPriceFrom(Double merchantNetPriceFrom) {
        this.merchantNetPriceFrom = merchantNetPriceFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantNetPriceFromFormatted")
    public String merchantNetPriceFromFormatted;
    public Product200ApplicationJsonDataTourGrades withMerchantNetPriceFromFormatted(String merchantNetPriceFromFormatted) {
        this.merchantNetPriceFromFormatted = merchantNetPriceFromFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceFrom")
    public Double priceFrom;
    public Product200ApplicationJsonDataTourGrades withPriceFrom(Double priceFrom) {
        this.priceFrom = priceFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceFromFormatted")
    public String priceFromFormatted;
    public Product200ApplicationJsonDataTourGrades withPriceFromFormatted(String priceFromFormatted) {
        this.priceFromFormatted = priceFromFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public Product200ApplicationJsonDataTourGrades withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}