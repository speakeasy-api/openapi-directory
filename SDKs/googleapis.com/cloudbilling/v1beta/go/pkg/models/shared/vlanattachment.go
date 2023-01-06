package shared

type VlanAttachmentBandwidthEnum string

const (
	VlanAttachmentBandwidthEnumBandwidthUnspecified VlanAttachmentBandwidthEnum = "BANDWIDTH_UNSPECIFIED"
	VlanAttachmentBandwidthEnumBandwidthBps50M      VlanAttachmentBandwidthEnum = "BANDWIDTH_BPS_50M"
	VlanAttachmentBandwidthEnumBandwidthBps100M     VlanAttachmentBandwidthEnum = "BANDWIDTH_BPS_100M"
	VlanAttachmentBandwidthEnumBandwidthBps200M     VlanAttachmentBandwidthEnum = "BANDWIDTH_BPS_200M"
	VlanAttachmentBandwidthEnumBandwidthBps300M     VlanAttachmentBandwidthEnum = "BANDWIDTH_BPS_300M"
	VlanAttachmentBandwidthEnumBandwidthBps400M     VlanAttachmentBandwidthEnum = "BANDWIDTH_BPS_400M"
	VlanAttachmentBandwidthEnumBandwidthBps500M     VlanAttachmentBandwidthEnum = "BANDWIDTH_BPS_500M"
	VlanAttachmentBandwidthEnumBandwidthBps1G       VlanAttachmentBandwidthEnum = "BANDWIDTH_BPS_1G"
	VlanAttachmentBandwidthEnumBandwidthBps2G       VlanAttachmentBandwidthEnum = "BANDWIDTH_BPS_2G"
	VlanAttachmentBandwidthEnumBandwidthBps5G       VlanAttachmentBandwidthEnum = "BANDWIDTH_BPS_5G"
	VlanAttachmentBandwidthEnumBandwidthBps10G      VlanAttachmentBandwidthEnum = "BANDWIDTH_BPS_10G"
	VlanAttachmentBandwidthEnumBandwidthBps20G      VlanAttachmentBandwidthEnum = "BANDWIDTH_BPS_20G"
	VlanAttachmentBandwidthEnumBandwidthBps50G      VlanAttachmentBandwidthEnum = "BANDWIDTH_BPS_50G"
)

// VlanAttachment
// VLAN attachment for cloud interconnect.
type VlanAttachment struct {
	Bandwidth *VlanAttachmentBandwidthEnum `json:"bandwidth,omitempty"`
	VlanCount *Usage                       `json:"vlanCount,omitempty"`
}
