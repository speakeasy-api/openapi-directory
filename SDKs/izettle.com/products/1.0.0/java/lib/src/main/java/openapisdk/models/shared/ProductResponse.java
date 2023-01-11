package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ProductResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public String[] categories;
    public ProductResponse withCategories(String[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public CategoryDto category;
    public ProductResponse withCategory(CategoryDto category) {
        this.category = category;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public ProductResponse withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ProductResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("etag")
    public String etag;
    public ProductResponse withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalReference")
    public String externalReference;
    public ProductResponse withExternalReference(String externalReference) {
        this.externalReference = externalReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageLookupKeys")
    public String[] imageLookupKeys;
    public ProductResponse withImageLookupKeys(String[] imageLookupKeys) {
        this.imageLookupKeys = imageLookupKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public MetadataDto metadata;
    public ProductResponse withMetadata(MetadataDto metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ProductResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("online")
    public OnlineProperties online;
    public ProductResponse withOnline(OnlineProperties online) {
        this.online = online;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("presentation")
    public PresentationDto presentation;
    public ProductResponse withPresentation(PresentationDto presentation) {
        this.presentation = presentation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxCode")
    public String taxCode;
    public ProductResponse withTaxCode(String taxCode) {
        this.taxCode = taxCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxExempt")
    public Boolean taxExempt;
    public ProductResponse withTaxExempt(Boolean taxExempt) {
        this.taxExempt = taxExempt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxRates")
    public String[] taxRates;
    public ProductResponse withTaxRates(String[] taxRates) {
        this.taxRates = taxRates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitName")
    public String unitName;
    public ProductResponse withUnitName(String unitName) {
        this.unitName = unitName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated")
    public OffsetDateTime updated;
    public ProductResponse withUpdated(OffsetDateTime updated) {
        this.updated = updated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedBy")
    public String updatedBy;
    public ProductResponse withUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
    @JsonProperty("uuid")
    public String uuid;
    public ProductResponse withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variantOptionDefinitions")
    public VariantOptionDefinitions variantOptionDefinitions;
    public ProductResponse withVariantOptionDefinitions(VariantOptionDefinitions variantOptionDefinitions) {
        this.variantOptionDefinitions = variantOptionDefinitions;
        return this;
    }
    @JsonProperty("variants")
    public VariantDto[] variants;
    public ProductResponse withVariants(VariantDto[] variants) {
        this.variants = variants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vatPercentage")
    public Double vatPercentage;
    public ProductResponse withVatPercentage(Double vatPercentage) {
        this.vatPercentage = vatPercentage;
        return this;
    }
}