package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomsItem
 * The customs declaration for a single item in the shipment.
**/
public class CustomsItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_of_origin")
    public java.util.Map<String, Object> countryOfOrigin;
    public CustomsItem withCountryOfOrigin(java.util.Map<String, Object> countryOfOrigin) {
        this.countryOfOrigin = countryOfOrigin;
        return this;
    }
    @JsonProperty("customs_item_id")
    public java.util.Map<String, Object> customsItemId;
    public CustomsItem withCustomsItemId(java.util.Map<String, Object> customsItemId) {
        this.customsItemId = customsItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CustomsItem withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("harmonized_tariff_code")
    public String harmonizedTariffCode;
    public CustomsItem withHarmonizedTariffCode(String harmonizedTariffCode) {
        this.harmonizedTariffCode = harmonizedTariffCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Integer quantity;
    public CustomsItem withQuantity(Integer quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public String sku;
    public CustomsItem withSku(String sku) {
        this.sku = sku;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku_description")
    public String skuDescription;
    public CustomsItem withSkuDescription(String skuDescription) {
        this.skuDescription = skuDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit_of_measure")
    public String unitOfMeasure;
    public CustomsItem withUnitOfMeasure(String unitOfMeasure) {
        this.unitOfMeasure = unitOfMeasure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public MonetaryValue value;
    public CustomsItem withValue(MonetaryValue value) {
        this.value = value;
        return this;
    }
}