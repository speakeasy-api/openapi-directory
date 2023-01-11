package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VariantDto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("barcode")
    public String barcode;
    public VariantDto withBarcode(String barcode) {
        this.barcode = barcode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costPrice")
    public Price costPrice;
    public VariantDto withCostPrice(Price costPrice) {
        this.costPrice = costPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public VariantDto withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public VariantDto withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public VariantOption[] options;
    public VariantDto withOptions(VariantOption[] options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("presentation")
    public PresentationDto presentation;
    public VariantDto withPresentation(PresentationDto presentation) {
        this.presentation = presentation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Price price;
    public VariantDto withPrice(Price price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public String sku;
    public VariantDto withSku(String sku) {
        this.sku = sku;
        return this;
    }
    @JsonProperty("uuid")
    public String uuid;
    public VariantDto withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vatPercentage")
    public Double vatPercentage;
    public VariantDto withVatPercentage(Double vatPercentage) {
        this.vatPercentage = vatPercentage;
        return this;
    }
}