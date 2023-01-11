package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProductUpdateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public String[] categories;
    public ProductUpdateRequest withCategories(String[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public CategoryDto category;
    public ProductUpdateRequest withCategory(CategoryDto category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ProductUpdateRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalReference")
    public String externalReference;
    public ProductUpdateRequest withExternalReference(String externalReference) {
        this.externalReference = externalReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageLookupKeys")
    public String[] imageLookupKeys;
    public ProductUpdateRequest withImageLookupKeys(String[] imageLookupKeys) {
        this.imageLookupKeys = imageLookupKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public MetadataDto metadata;
    public ProductUpdateRequest withMetadata(MetadataDto metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ProductUpdateRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("presentation")
    public PresentationDto presentation;
    public ProductUpdateRequest withPresentation(PresentationDto presentation) {
        this.presentation = presentation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxCode")
    public String taxCode;
    public ProductUpdateRequest withTaxCode(String taxCode) {
        this.taxCode = taxCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxExempt")
    public Boolean taxExempt;
    public ProductUpdateRequest withTaxExempt(Boolean taxExempt) {
        this.taxExempt = taxExempt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxRates")
    public String[] taxRates;
    public ProductUpdateRequest withTaxRates(String[] taxRates) {
        this.taxRates = taxRates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitName")
    public String unitName;
    public ProductUpdateRequest withUnitName(String unitName) {
        this.unitName = unitName;
        return this;
    }
    @JsonProperty("uuid")
    public String uuid;
    public ProductUpdateRequest withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
    @JsonProperty("variantUuids")
    public String[] variantUuids;
    public ProductUpdateRequest withVariantUuids(String[] variantUuids) {
        this.variantUuids = variantUuids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vatPercentage")
    public Double vatPercentage;
    public ProductUpdateRequest withVatPercentage(Double vatPercentage) {
        this.vatPercentage = vatPercentage;
        return this;
    }
}