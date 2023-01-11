package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPrivatecatalogproducerV1beta1Catalog
 * The producer representation of a catalog which is a curated collection of
 * solutions that can be managed, controlled, and shared by cloud admins.
**/
public class GoogleCloudPrivatecatalogproducerV1beta1Catalog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudPrivatecatalogproducerV1beta1Catalog withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudPrivatecatalogproducerV1beta1Catalog withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudPrivatecatalogproducerV1beta1Catalog withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudPrivatecatalogproducerV1beta1Catalog withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public GoogleCloudPrivatecatalogproducerV1beta1Catalog withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudPrivatecatalogproducerV1beta1Catalog withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}