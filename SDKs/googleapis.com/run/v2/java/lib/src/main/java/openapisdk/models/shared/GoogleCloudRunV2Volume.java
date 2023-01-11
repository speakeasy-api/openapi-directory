package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2Volume
 * Volume represents a named volume in a container.
**/
public class GoogleCloudRunV2Volume {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudSqlInstance")
    public GoogleCloudRunV2CloudSqlInstance cloudSqlInstance;
    public GoogleCloudRunV2Volume withCloudSqlInstance(GoogleCloudRunV2CloudSqlInstance cloudSqlInstance) {
        this.cloudSqlInstance = cloudSqlInstance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRunV2Volume withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public GoogleCloudRunV2SecretVolumeSource secret;
    public GoogleCloudRunV2Volume withSecret(GoogleCloudRunV2SecretVolumeSource secret) {
        this.secret = secret;
        return this;
    }
}