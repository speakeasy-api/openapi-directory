package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudSecuritycenterV1MuteConfig
 * A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings.
**/
public class GoogleCloudSecuritycenterV1MuteConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudSecuritycenterV1MuteConfig withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudSecuritycenterV1MuteConfig withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudSecuritycenterV1MuteConfig withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public GoogleCloudSecuritycenterV1MuteConfig withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mostRecentEditor")
    public String mostRecentEditor;
    public GoogleCloudSecuritycenterV1MuteConfig withMostRecentEditor(String mostRecentEditor) {
        this.mostRecentEditor = mostRecentEditor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudSecuritycenterV1MuteConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudSecuritycenterV1MuteConfig withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}