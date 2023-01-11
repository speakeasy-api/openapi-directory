package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudBuildOptions
 * Options for the build operations performed as a part of the version deployment. Only applicable for App Engine flexible environment when creating a version using source code directly.
**/
public class CloudBuildOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appYamlPath")
    public String appYamlPath;
    public CloudBuildOptions withAppYamlPath(String appYamlPath) {
        this.appYamlPath = appYamlPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudBuildTimeout")
    public String cloudBuildTimeout;
    public CloudBuildOptions withCloudBuildTimeout(String cloudBuildTimeout) {
        this.cloudBuildTimeout = cloudBuildTimeout;
        return this;
    }
}