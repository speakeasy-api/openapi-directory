package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirestoreAdminV1beta2Field
 * Represents a single field in the database. Fields are grouped by their "Collection Group", which represent all collections in the database with the same id.
**/
public class GoogleFirestoreAdminV1beta2Field {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indexConfig")
    public GoogleFirestoreAdminV1beta2IndexConfig indexConfig;
    public GoogleFirestoreAdminV1beta2Field withIndexConfig(GoogleFirestoreAdminV1beta2IndexConfig indexConfig) {
        this.indexConfig = indexConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleFirestoreAdminV1beta2Field withName(String name) {
        this.name = name;
        return this;
    }
}