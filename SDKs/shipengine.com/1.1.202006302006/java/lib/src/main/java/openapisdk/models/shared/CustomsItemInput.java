package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomsItemInput
 * The customs declaration for a single item in the shipment.
**/
public class CustomsItemInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_of_origin")
    public java.util.Map<String, Object> countryOfOrigin;
    public CustomsItemInput withCountryOfOrigin(java.util.Map<String, Object> countryOfOrigin) {
        this.countryOfOrigin = countryOfOrigin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CustomsItemInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("harmonized_tariff_code")
    public String harmonizedTariffCode;
    public CustomsItemInput withHarmonizedTariffCode(String harmonizedTariffCode) {
        this.harmonizedTariffCode = harmonizedTariffCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Integer quantity;
    public CustomsItemInput withQuantity(Integer quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public String sku;
    public CustomsItemInput withSku(String sku) {
        this.sku = sku;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku_description")
    public String skuDescription;
    public CustomsItemInput withSkuDescription(String skuDescription) {
        this.skuDescription = skuDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit_of_measure")
    public String unitOfMeasure;
    public CustomsItemInput withUnitOfMeasure(String unitOfMeasure) {
        this.unitOfMeasure = unitOfMeasure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public MonetaryValue value;
    public CustomsItemInput withValue(MonetaryValue value) {
        this.value = value;
        return this;
    }
}