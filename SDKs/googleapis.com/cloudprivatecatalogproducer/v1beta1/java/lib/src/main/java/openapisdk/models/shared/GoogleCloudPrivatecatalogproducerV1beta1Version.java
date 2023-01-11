package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPrivatecatalogproducerV1beta1Version
 * The producer representation of a version, which is a child resource under a
 * `Product` with asset data.
**/
public class GoogleCloudPrivatecatalogproducerV1beta1Version {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset")
    public java.util.Map<String, Object> asset;
    public GoogleCloudPrivatecatalogproducerV1beta1Version withAsset(java.util.Map<String, Object> asset) {
        this.asset = asset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudPrivatecatalogproducerV1beta1Version withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudPrivatecatalogproducerV1beta1Version withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudPrivatecatalogproducerV1beta1Version withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalAsset")
    public java.util.Map<String, Object> originalAsset;
    public GoogleCloudPrivatecatalogproducerV1beta1Version withOriginalAsset(java.util.Map<String, Object> originalAsset) {
        this.originalAsset = originalAsset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudPrivatecatalogproducerV1beta1Version withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}