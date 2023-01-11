package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleDatastoreAdminV1beta1EntityFilter
 * Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz']
**/
public class GoogleDatastoreAdminV1beta1EntityFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kinds")
    public String[] kinds;
    public GoogleDatastoreAdminV1beta1EntityFilter withKinds(String[] kinds) {
        this.kinds = kinds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceIds")
    public String[] namespaceIds;
    public GoogleDatastoreAdminV1beta1EntityFilter withNamespaceIds(String[] namespaceIds) {
        this.namespaceIds = namespaceIds;
        return this;
    }
}