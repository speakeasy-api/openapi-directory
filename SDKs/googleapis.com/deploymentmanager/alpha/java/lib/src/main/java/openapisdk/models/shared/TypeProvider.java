package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TypeProvider
 * A type provider that describes a service-backed Type.
**/
public class TypeProvider {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectionOverrides")
    public CollectionOverride[] collectionOverrides;
    public TypeProvider withCollectionOverrides(CollectionOverride[] collectionOverrides) {
        this.collectionOverrides = collectionOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credential")
    public Credential credential;
    public TypeProvider withCredential(Credential credential) {
        this.credential = credential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customCertificateAuthorityRoots")
    public String[] customCertificateAuthorityRoots;
    public TypeProvider withCustomCertificateAuthorityRoots(String[] customCertificateAuthorityRoots) {
        this.customCertificateAuthorityRoots = customCertificateAuthorityRoots;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public TypeProvider withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("descriptorUrl")
    public String descriptorUrl;
    public TypeProvider withDescriptorUrl(String descriptorUrl) {
        this.descriptorUrl = descriptorUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public TypeProvider withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertTime")
    public String insertTime;
    public TypeProvider withInsertTime(String insertTime) {
        this.insertTime = insertTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public TypeProviderLabelEntry[] labels;
    public TypeProvider withLabels(TypeProviderLabelEntry[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TypeProvider withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation")
    public Operation operation;
    public TypeProvider withOperation(Operation operation) {
        this.operation = operation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public Options options;
    public TypeProvider withOptions(Options options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public TypeProvider withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
}