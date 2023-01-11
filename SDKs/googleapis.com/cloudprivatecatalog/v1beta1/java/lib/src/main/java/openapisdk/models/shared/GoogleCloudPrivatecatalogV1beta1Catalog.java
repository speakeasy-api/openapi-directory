package openapisdk.models.shared;



/**
 * GoogleCloudPrivatecatalogV1beta1Catalog
 * The readonly representation of a catalog computed with a given resource
 * context.
**/
public class GoogleCloudPrivatecatalogV1beta1Catalog {
    public String createTime;
    public GoogleCloudPrivatecatalogV1beta1Catalog withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    public String description;
    public GoogleCloudPrivatecatalogV1beta1Catalog withDescription(String description) {
        this.description = description;
        return this;
    }
    public String displayName;
    public GoogleCloudPrivatecatalogV1beta1Catalog withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    public String name;
    public GoogleCloudPrivatecatalogV1beta1Catalog withName(String name) {
        this.name = name;
        return this;
    }
    public String updateTime;
    public GoogleCloudPrivatecatalogV1beta1Catalog withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}