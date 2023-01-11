package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Version
 * A `Version` is a configuration and a collection of static files which determine how a site is displayed.
**/
public class Version {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public ServingConfig config;
    public Version withConfig(ServingConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Version withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createUser")
    public ActingUser createUser;
    public Version withCreateUser(ActingUser createUser) {
        this.createUser = createUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteTime")
    public String deleteTime;
    public Version withDeleteTime(String deleteTime) {
        this.deleteTime = deleteTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteUser")
    public ActingUser deleteUser;
    public Version withDeleteUser(ActingUser deleteUser) {
        this.deleteUser = deleteUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileCount")
    public String fileCount;
    public Version withFileCount(String fileCount) {
        this.fileCount = fileCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finalizeTime")
    public String finalizeTime;
    public Version withFinalizeTime(String finalizeTime) {
        this.finalizeTime = finalizeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finalizeUser")
    public ActingUser finalizeUser;
    public Version withFinalizeUser(ActingUser finalizeUser) {
        this.finalizeUser = finalizeUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Version withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Version withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public VersionStatusEnum status;
    public Version withStatus(VersionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionBytes")
    public String versionBytes;
    public Version withVersionBytes(String versionBytes) {
        this.versionBytes = versionBytes;
        return this;
    }
}