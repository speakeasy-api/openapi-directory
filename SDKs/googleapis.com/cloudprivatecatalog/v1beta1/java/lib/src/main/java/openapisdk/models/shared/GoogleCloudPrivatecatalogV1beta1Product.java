package openapisdk.models.shared;



/**
 * GoogleCloudPrivatecatalogV1beta1Product
 * The readonly representation of a product computed with a given resource
 * context.
**/
public class GoogleCloudPrivatecatalogV1beta1Product {
    public String assetType;
    public GoogleCloudPrivatecatalogV1beta1Product withAssetType(String assetType) {
        this.assetType = assetType;
        return this;
    }
    public String createTime;
    public GoogleCloudPrivatecatalogV1beta1Product withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    public java.util.Map<String, Object> displayMetadata;
    public GoogleCloudPrivatecatalogV1beta1Product withDisplayMetadata(java.util.Map<String, Object> displayMetadata) {
        this.displayMetadata = displayMetadata;
        return this;
    }
    public String iconUri;
    public GoogleCloudPrivatecatalogV1beta1Product withIconUri(String iconUri) {
        this.iconUri = iconUri;
        return this;
    }
    public String name;
    public GoogleCloudPrivatecatalogV1beta1Product withName(String name) {
        this.name = name;
        return this;
    }
    public String updateTime;
    public GoogleCloudPrivatecatalogV1beta1Product withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}