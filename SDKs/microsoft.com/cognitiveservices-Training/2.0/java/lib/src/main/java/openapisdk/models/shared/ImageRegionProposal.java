package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImageRegionProposal {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageId")
    public String imageId;
    public ImageRegionProposal withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public ImageRegionProposal withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proposals")
    public RegionProposal[] proposals;
    public ImageRegionProposal withProposals(RegionProposal[] proposals) {
        this.proposals = proposals;
        return this;
    }
}