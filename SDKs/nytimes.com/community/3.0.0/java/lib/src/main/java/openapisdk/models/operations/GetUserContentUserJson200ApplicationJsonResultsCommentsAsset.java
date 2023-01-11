package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserContentUserJson200ApplicationJsonResultsCommentsAsset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("all-properties")
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAssetAllProperties[] allProperties;
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAsset withAllProperties(GetUserContentUserJson200ApplicationJsonResultsCommentsAssetAllProperties[] allProperties) {
        this.allProperties = allProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetID")
    public Long assetID;
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAsset withAssetId(Long assetID) {
        this.assetID = assetID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetTitle")
    public String assetTitle;
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAsset withAssetTitle(String assetTitle) {
        this.assetTitle = assetTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetURL")
    public String assetURL;
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAsset withAssetUrl(String assetURL) {
        this.assetURL = assetURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createDate")
    public String createDate;
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAsset withCreateDate(String createDate) {
        this.createDate = createDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAssetLabels[] labels;
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAsset withLabels(GetUserContentUserJson200ApplicationJsonResultsCommentsAssetLabels[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAssetProperties properties;
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAsset withProperties(GetUserContentUserJson200ApplicationJsonResultsCommentsAssetProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAsset withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxonomy")
    public String taxonomy;
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAsset withTaxonomy(String taxonomy) {
        this.taxonomy = taxonomy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public java.util.Map<String, Object>[] text;
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAsset withText(java.util.Map<String, Object>[] text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateDate")
    public String updateDate;
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAsset withUpdateDate(String updateDate) {
        this.updateDate = updateDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendorID")
    public String vendorID;
    public GetUserContentUserJson200ApplicationJsonResultsCommentsAsset withVendorId(String vendorID) {
        this.vendorID = vendorID;
        return this;
    }
}