package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2Container
 * Represents a container that may contain DLP findings. Examples of a container include a file, table, or database record.
**/
public class GooglePrivacyDlpV2Container {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullPath")
    public String fullPath;
    public GooglePrivacyDlpV2Container withFullPath(String fullPath) {
        this.fullPath = fullPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public GooglePrivacyDlpV2Container withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relativePath")
    public String relativePath;
    public GooglePrivacyDlpV2Container withRelativePath(String relativePath) {
        this.relativePath = relativePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rootPath")
    public String rootPath;
    public GooglePrivacyDlpV2Container withRootPath(String rootPath) {
        this.rootPath = rootPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GooglePrivacyDlpV2Container withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GooglePrivacyDlpV2Container withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public GooglePrivacyDlpV2Container withVersion(String version) {
        this.version = version;
        return this;
    }
}