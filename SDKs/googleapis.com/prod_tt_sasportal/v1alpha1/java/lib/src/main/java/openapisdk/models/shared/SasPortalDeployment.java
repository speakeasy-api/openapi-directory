package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalDeployment
 * The Deployment.
**/
public class SasPortalDeployment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public SasPortalDeployment withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frns")
    public String[] frns;
    public SasPortalDeployment withFrns(String[] frns) {
        this.frns = frns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SasPortalDeployment withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sasUserIds")
    public String[] sasUserIds;
    public SasPortalDeployment withSasUserIds(String[] sasUserIds) {
        this.sasUserIds = sasUserIds;
        return this;
    }
}