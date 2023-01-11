package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1betaDocument
 * Document captures all raw metadata information of items to be recommended or searched.
**/
public class GoogleCloudDiscoveryengineV1betaDocument {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleCloudDiscoveryengineV1betaDocument withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jsonData")
    public String jsonData;
    public GoogleCloudDiscoveryengineV1betaDocument withJsonData(String jsonData) {
        this.jsonData = jsonData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudDiscoveryengineV1betaDocument withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentDocumentId")
    public String parentDocumentId;
    public GoogleCloudDiscoveryengineV1betaDocument withParentDocumentId(String parentDocumentId) {
        this.parentDocumentId = parentDocumentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaId")
    public String schemaId;
    public GoogleCloudDiscoveryengineV1betaDocument withSchemaId(String schemaId) {
        this.schemaId = schemaId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("structData")
    public java.util.Map<String, Object> structData;
    public GoogleCloudDiscoveryengineV1betaDocument withStructData(java.util.Map<String, Object> structData) {
        this.structData = structData;
        return this;
    }
}