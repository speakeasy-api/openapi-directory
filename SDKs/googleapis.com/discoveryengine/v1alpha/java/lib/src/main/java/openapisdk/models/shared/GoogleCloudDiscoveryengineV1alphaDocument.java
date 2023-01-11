package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1alphaDocument
 * Document captures all raw metadata information of items to be recommended or searched.
**/
public class GoogleCloudDiscoveryengineV1alphaDocument {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleCloudDiscoveryengineV1alphaDocument withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jsonData")
    public String jsonData;
    public GoogleCloudDiscoveryengineV1alphaDocument withJsonData(String jsonData) {
        this.jsonData = jsonData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudDiscoveryengineV1alphaDocument withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentDocumentId")
    public String parentDocumentId;
    public GoogleCloudDiscoveryengineV1alphaDocument withParentDocumentId(String parentDocumentId) {
        this.parentDocumentId = parentDocumentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaId")
    public String schemaId;
    public GoogleCloudDiscoveryengineV1alphaDocument withSchemaId(String schemaId) {
        this.schemaId = schemaId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("structData")
    public java.util.Map<String, Object> structData;
    public GoogleCloudDiscoveryengineV1alphaDocument withStructData(java.util.Map<String, Object> structData) {
        this.structData = structData;
        return this;
    }
}