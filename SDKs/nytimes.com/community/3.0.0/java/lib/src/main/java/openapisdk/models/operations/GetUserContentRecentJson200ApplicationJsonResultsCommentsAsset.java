package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("all-properties")
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties[] allProperties;
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset withAllProperties(GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties[] allProperties) {
        this.allProperties = allProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetID")
    public Long assetID;
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset withAssetId(Long assetID) {
        this.assetID = assetID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetTitle")
    public String assetTitle;
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset withAssetTitle(String assetTitle) {
        this.assetTitle = assetTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetURL")
    public String assetURL;
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset withAssetUrl(String assetURL) {
        this.assetURL = assetURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createDate")
    public String createDate;
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset withCreateDate(String createDate) {
        this.createDate = createDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, Object>[] labels;
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset withLabels(java.util.Map<String, Object>[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties properties;
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset withProperties(GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxonomy")
    public String taxonomy;
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset withTaxonomy(String taxonomy) {
        this.taxonomy = taxonomy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public java.util.Map<String, Object>[] text;
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset withText(java.util.Map<String, Object>[] text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateDate")
    public String updateDate;
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset withUpdateDate(String updateDate) {
        this.updateDate = updateDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendorID")
    public String vendorID;
    public GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset withVendorId(String vendorID) {
        this.vendorID = vendorID;
        return this;
    }
}