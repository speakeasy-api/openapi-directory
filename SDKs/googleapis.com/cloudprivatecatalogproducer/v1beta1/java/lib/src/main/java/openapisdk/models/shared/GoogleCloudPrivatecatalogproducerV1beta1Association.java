package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPrivatecatalogproducerV1beta1Association
 * An association tuple that pairs a `Catalog` to a resource
 * that can use the `Catalog`. After association, a
 * google.cloud.privatecatalog.v1beta1.Catalog becomes available to
 * consumers under specified Association.resource and all of its child
 * nodes.
 * Users who have the `cloudprivatecatalog.targets.get` permission on any of
 * the resource nodes can access the catalog and child products under the node.
 * 
 * For example, suppose the cloud resource hierarchy is as follows:
 * 
 * * organizations/example.com
 *   * folders/team
 *     * projects/test
 * 
 * After creating an association with `organizations/example.com`, the catalog
 * `catalogs/1`  is accessible from the following paths:
 * 
 * * organizations/example.com
 * * folders/team
 * * projects/test
 * 
 * Users can access them by
 * google.cloud.v1beta1.PrivateCatalog.SearchCatalogs action.
**/
public class GoogleCloudPrivatecatalogproducerV1beta1Association {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudPrivatecatalogproducerV1beta1Association withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudPrivatecatalogproducerV1beta1Association withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public String resource;
    public GoogleCloudPrivatecatalogproducerV1beta1Association withResource(String resource) {
        this.resource = resource;
        return this;
    }
}