package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirestoreAdminV1beta2Index
 * Cloud Firestore indexes enable simple and complex queries against documents in a database.
**/
public class GoogleFirestoreAdminV1beta2Index {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public GoogleFirestoreAdminV1beta2IndexField[] fields;
    public GoogleFirestoreAdminV1beta2Index withFields(GoogleFirestoreAdminV1beta2IndexField[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleFirestoreAdminV1beta2Index withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryScope")
    public GoogleFirestoreAdminV1beta2IndexQueryScopeEnum queryScope;
    public GoogleFirestoreAdminV1beta2Index withQueryScope(GoogleFirestoreAdminV1beta2IndexQueryScopeEnum queryScope) {
        this.queryScope = queryScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public GoogleFirestoreAdminV1beta2IndexStateEnum state;
    public GoogleFirestoreAdminV1beta2Index withState(GoogleFirestoreAdminV1beta2IndexStateEnum state) {
        this.state = state;
        return this;
    }
}