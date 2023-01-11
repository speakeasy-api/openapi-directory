package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EditorialVideoContent
 * Metadata about editorial content
**/
public class EditorialVideoContent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aspect")
    public Double aspect;
    public EditorialVideoContent withAspect(Double aspect) {
        this.aspect = aspect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assets")
    public EditorialVideoAssets assets;
    public EditorialVideoContent withAssets(EditorialVideoAssets assets) {
        this.assets = assets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("byline")
    public String byline;
    public EditorialVideoContent withByline(String byline) {
        this.byline = byline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caption")
    public String caption;
    public EditorialVideoContent withCaption(String caption) {
        this.caption = caption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public EditorialCategory[] categories;
    public EditorialVideoContent withCategories(EditorialCategory[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_taken")
    public LocalDate dateTaken;
    public EditorialVideoContent withDateTaken(LocalDate dateTaken) {
        this.dateTaken = dateTaken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EditorialVideoContent withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public EditorialVideoContent withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywords")
    public String[] keywords;
    public EditorialVideoContent withKeywords(String[] keywords) {
        this.keywords = keywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public EditorialVideoContent withTitle(String title) {
        this.title = title;
        return this;
    }
}