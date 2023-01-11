package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalDeploymentInput
 * The Deployment.
**/
public class SasPortalDeploymentInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public SasPortalDeploymentInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sasUserIds")
    public String[] sasUserIds;
    public SasPortalDeploymentInput withSasUserIds(String[] sasUserIds) {
        this.sasUserIds = sasUserIds;
        return this;
    }
}