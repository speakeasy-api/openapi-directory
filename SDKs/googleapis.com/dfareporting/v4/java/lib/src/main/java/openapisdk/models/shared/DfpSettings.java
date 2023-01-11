package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DfpSettings
 * Google Ad Manager Settings
**/
public class DfpSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dfpNetworkCode")
    public String dfpNetworkCode;
    public DfpSettings withDfpNetworkCode(String dfpNetworkCode) {
        this.dfpNetworkCode = dfpNetworkCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dfpNetworkName")
    public String dfpNetworkName;
    public DfpSettings withDfpNetworkName(String dfpNetworkName) {
        this.dfpNetworkName = dfpNetworkName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("programmaticPlacementAccepted")
    public Boolean programmaticPlacementAccepted;
    public DfpSettings withProgrammaticPlacementAccepted(Boolean programmaticPlacementAccepted) {
        this.programmaticPlacementAccepted = programmaticPlacementAccepted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pubPaidPlacementAccepted")
    public Boolean pubPaidPlacementAccepted;
    public DfpSettings withPubPaidPlacementAccepted(Boolean pubPaidPlacementAccepted) {
        this.pubPaidPlacementAccepted = pubPaidPlacementAccepted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherPortalOnly")
    public Boolean publisherPortalOnly;
    public DfpSettings withPublisherPortalOnly(Boolean publisherPortalOnly) {
        this.publisherPortalOnly = publisherPortalOnly;
        return this;
    }
}