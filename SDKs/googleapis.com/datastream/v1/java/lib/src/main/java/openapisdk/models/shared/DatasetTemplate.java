package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatasetTemplate
 * Dataset template used for dynamic dataset creation.
**/
public class DatasetTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetIdPrefix")
    public String datasetIdPrefix;
    public DatasetTemplate withDatasetIdPrefix(String datasetIdPrefix) {
        this.datasetIdPrefix = datasetIdPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyName")
    public String kmsKeyName;
    public DatasetTemplate withKmsKeyName(String kmsKeyName) {
        this.kmsKeyName = kmsKeyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public DatasetTemplate withLocation(String location) {
        this.location = location;
        return this;
    }
}