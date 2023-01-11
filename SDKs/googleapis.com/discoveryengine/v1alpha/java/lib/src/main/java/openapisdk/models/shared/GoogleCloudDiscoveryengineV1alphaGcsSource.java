package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1alphaGcsSource
 * Cloud Storage location for input content.
**/
public class GoogleCloudDiscoveryengineV1alphaGcsSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSchema")
    public String dataSchema;
    public GoogleCloudDiscoveryengineV1alphaGcsSource withDataSchema(String dataSchema) {
        this.dataSchema = dataSchema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputUris")
    public String[] inputUris;
    public GoogleCloudDiscoveryengineV1alphaGcsSource withInputUris(String[] inputUris) {
        this.inputUris = inputUris;
        return this;
    }
}