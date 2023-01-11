package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GcsDestinationConfig
 * Google Cloud Storage destination configuration
**/
public class GcsDestinationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avroFileFormat")
    public java.util.Map<String, Object> avroFileFormat;
    public GcsDestinationConfig withAvroFileFormat(java.util.Map<String, Object> avroFileFormat) {
        this.avroFileFormat = avroFileFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileRotationInterval")
    public String fileRotationInterval;
    public GcsDestinationConfig withFileRotationInterval(String fileRotationInterval) {
        this.fileRotationInterval = fileRotationInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileRotationMb")
    public Integer fileRotationMb;
    public GcsDestinationConfig withFileRotationMb(Integer fileRotationMb) {
        this.fileRotationMb = fileRotationMb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jsonFileFormat")
    public JsonFileFormat jsonFileFormat;
    public GcsDestinationConfig withJsonFileFormat(JsonFileFormat jsonFileFormat) {
        this.jsonFileFormat = jsonFileFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public GcsDestinationConfig withPath(String path) {
        this.path = path;
        return this;
    }
}