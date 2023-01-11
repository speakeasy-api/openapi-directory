package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2EnvVar
 * EnvVar represents an environment variable present in a Container.
**/
public class GoogleCloudRunV2EnvVar {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRunV2EnvVar withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GoogleCloudRunV2EnvVar withValue(String value) {
        this.value = value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueSource")
    public GoogleCloudRunV2EnvVarSource valueSource;
    public GoogleCloudRunV2EnvVar withValueSource(GoogleCloudRunV2EnvVarSource valueSource) {
        this.valueSource = valueSource;
        return this;
    }
}