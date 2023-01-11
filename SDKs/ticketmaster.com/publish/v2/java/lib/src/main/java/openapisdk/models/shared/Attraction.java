package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Attraction
 * Attraction
**/
public class Attraction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public Attraction withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalInfos")
    public java.util.Map<String, String> additionalInfos;
    public Attraction withAdditionalInfos(java.util.Map<String, String> additionalInfos) {
        this.additionalInfos = additionalInfos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classifications")
    public Classification[] classifications;
    public Attraction withClassifications(Classification[] classifications) {
        this.classifications = classifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("descriptions")
    public java.util.Map<String, String> descriptions;
    public Attraction withDescriptions(java.util.Map<String, String> descriptions) {
        this.descriptions = descriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discoverable")
    public Boolean discoverable;
    public Attraction withDiscoverable(Boolean discoverable) {
        this.discoverable = discoverable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public Image[] images;
    public Attraction withImages(Image[] images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("names")
    public java.util.Map<String, String> names;
    public Attraction withNames(java.util.Map<String, String> names) {
        this.names = names;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("references")
    public java.util.Map<String, String> references;
    public Attraction withReferences(java.util.Map<String, String> references) {
        this.references = references;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public java.util.Map<String, Object>[] relationships;
    public Attraction withRelationships(java.util.Map<String, Object>[] relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public Source source;
    public Attraction withSource(Source source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("test")
    public Boolean test;
    public Attraction withTest(Boolean test) {
        this.test = test;
        return this;
    }
    @JsonProperty("type")
    public AttractionTypeEnum type;
    public Attraction withType(AttractionTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Attraction withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Long version;
    public Attraction withVersion(Long version) {
        this.version = version;
        return this;
    }
}