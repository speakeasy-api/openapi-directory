package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudInterconnectWorkload
 * Specifies usage for Cloud Interconnect resources.
**/
public class CloudInterconnectWorkload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interconnectAttachments")
    public VlanAttachment[] interconnectAttachments;
    public CloudInterconnectWorkload withInterconnectAttachments(VlanAttachment[] interconnectAttachments) {
        this.interconnectAttachments = interconnectAttachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interconnectType")
    public CloudInterconnectWorkloadInterconnectTypeEnum interconnectType;
    public CloudInterconnectWorkload withInterconnectType(CloudInterconnectWorkloadInterconnectTypeEnum interconnectType) {
        this.interconnectType = interconnectType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkType")
    public CloudInterconnectWorkloadLinkTypeEnum linkType;
    public CloudInterconnectWorkload withLinkType(CloudInterconnectWorkloadLinkTypeEnum linkType) {
        this.linkType = linkType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provisionedLinkCount")
    public Usage provisionedLinkCount;
    public CloudInterconnectWorkload withProvisionedLinkCount(Usage provisionedLinkCount) {
        this.provisionedLinkCount = provisionedLinkCount;
        return this;
    }
}