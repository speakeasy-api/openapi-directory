package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GcpUserAccessBinding
 * Restricts access to Cloud Console and Google Cloud APIs for a set of users using Context-Aware Access.
**/
public class GcpUserAccessBinding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessLevels")
    public String[] accessLevels;
    public GcpUserAccessBinding withAccessLevels(String[] accessLevels) {
        this.accessLevels = accessLevels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupKey")
    public String groupKey;
    public GcpUserAccessBinding withGroupKey(String groupKey) {
        this.groupKey = groupKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GcpUserAccessBinding withName(String name) {
        this.name = name;
        return this;
    }
}