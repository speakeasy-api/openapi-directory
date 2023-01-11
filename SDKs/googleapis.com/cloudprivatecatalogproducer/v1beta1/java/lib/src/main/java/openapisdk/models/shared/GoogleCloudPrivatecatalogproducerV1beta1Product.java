package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPrivatecatalogproducerV1beta1Product
 * The producer representation of a product which is a child resource of
 * `Catalog` with display metadata and a list of `Version` resources.
**/
public class GoogleCloudPrivatecatalogproducerV1beta1Product {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetType")
    public String assetType;
    public GoogleCloudPrivatecatalogproducerV1beta1Product withAssetType(String assetType) {
        this.assetType = assetType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudPrivatecatalogproducerV1beta1Product withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayMetadata")
    public java.util.Map<String, Object> displayMetadata;
    public GoogleCloudPrivatecatalogproducerV1beta1Product withDisplayMetadata(java.util.Map<String, Object> displayMetadata) {
        this.displayMetadata = displayMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iconUri")
    public String iconUri;
    public GoogleCloudPrivatecatalogproducerV1beta1Product withIconUri(String iconUri) {
        this.iconUri = iconUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudPrivatecatalogproducerV1beta1Product withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudPrivatecatalogproducerV1beta1Product withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}