package openapisdk.models.shared;



/**
 * GoogleCloudPrivatecatalogV1beta1Version
 * The consumer representation of a version which is a child resource under a
 * `Product` with asset data.
**/
public class GoogleCloudPrivatecatalogV1beta1Version {
    public java.util.Map<String, Object> asset;
    public GoogleCloudPrivatecatalogV1beta1Version withAsset(java.util.Map<String, Object> asset) {
        this.asset = asset;
        return this;
    }
    public String createTime;
    public GoogleCloudPrivatecatalogV1beta1Version withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    public String description;
    public GoogleCloudPrivatecatalogV1beta1Version withDescription(String description) {
        this.description = description;
        return this;
    }
    public String name;
    public GoogleCloudPrivatecatalogV1beta1Version withName(String name) {
        this.name = name;
        return this;
    }
    public String updateTime;
    public GoogleCloudPrivatecatalogV1beta1Version withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}