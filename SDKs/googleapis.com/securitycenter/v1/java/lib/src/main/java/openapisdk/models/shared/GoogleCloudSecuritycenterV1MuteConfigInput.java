package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudSecuritycenterV1MuteConfigInput
 * A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings.
**/
public class GoogleCloudSecuritycenterV1MuteConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudSecuritycenterV1MuteConfigInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudSecuritycenterV1MuteConfigInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public GoogleCloudSecuritycenterV1MuteConfigInput withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudSecuritycenterV1MuteConfigInput withName(String name) {
        this.name = name;
        return this;
    }
}