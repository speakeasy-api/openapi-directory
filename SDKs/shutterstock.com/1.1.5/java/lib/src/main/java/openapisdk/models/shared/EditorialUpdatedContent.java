package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * EditorialUpdatedContent
 * Metadata about updated editorial content
**/
public class EditorialUpdatedContent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aspect")
    public Double aspect;
    public EditorialUpdatedContent withAspect(Double aspect) {
        this.aspect = aspect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assets")
    public EditorialAssets assets;
    public EditorialUpdatedContent withAssets(EditorialAssets assets) {
        this.assets = assets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("byline")
    public String byline;
    public EditorialUpdatedContent withByline(String byline) {
        this.byline = byline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caption")
    public String caption;
    public EditorialUpdatedContent withCaption(String caption) {
        this.caption = caption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public EditorialCategory[] categories;
    public EditorialUpdatedContent withCategories(EditorialCategory[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commercial_status")
    public Object commercialStatus;
    public EditorialUpdatedContent withCommercialStatus(Object commercialStatus) {
        this.commercialStatus = commercialStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_time")
    public OffsetDateTime createdTime;
    public EditorialUpdatedContent withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_taken")
    public LocalDate dateTaken;
    public EditorialUpdatedContent withDateTaken(LocalDate dateTaken) {
        this.dateTaken = dateTaken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EditorialUpdatedContent withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public EditorialUpdatedContent withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywords")
    public String[] keywords;
    public EditorialUpdatedContent withKeywords(String[] keywords) {
        this.keywords = keywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rights")
    public EditorialUpdatedContentRights rights;
    public EditorialUpdatedContent withRights(EditorialUpdatedContentRights rights) {
        this.rights = rights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("special_instructions")
    public String specialInstructions;
    public EditorialUpdatedContent withSpecialInstructions(String specialInstructions) {
        this.specialInstructions = specialInstructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supplier_code")
    public String supplierCode;
    public EditorialUpdatedContent withSupplierCode(String supplierCode) {
        this.supplierCode = supplierCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public EditorialUpdatedContent withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_time")
    public OffsetDateTime updatedTime;
    public EditorialUpdatedContent withUpdatedTime(OffsetDateTime updatedTime) {
        this.updatedTime = updatedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updates")
    public String[] updates;
    public EditorialUpdatedContent withUpdates(String[] updates) {
        this.updates = updates;
        return this;
    }
}