package shared

type CloudInterconnectWorkloadInterconnectTypeEnum string

const (
	CloudInterconnectWorkloadInterconnectTypeEnumInterconnectTypeUnspecified CloudInterconnectWorkloadInterconnectTypeEnum = "INTERCONNECT_TYPE_UNSPECIFIED"
	CloudInterconnectWorkloadInterconnectTypeEnumInterconnectTypeDedicated   CloudInterconnectWorkloadInterconnectTypeEnum = "INTERCONNECT_TYPE_DEDICATED"
	CloudInterconnectWorkloadInterconnectTypeEnumInterconnectTypePartner     CloudInterconnectWorkloadInterconnectTypeEnum = "INTERCONNECT_TYPE_PARTNER"
)

type CloudInterconnectWorkloadLinkTypeEnum string

const (
	CloudInterconnectWorkloadLinkTypeEnumLinkTypeUnspecified    CloudInterconnectWorkloadLinkTypeEnum = "LINK_TYPE_UNSPECIFIED"
	CloudInterconnectWorkloadLinkTypeEnumLinkTypeEthernet10GLr  CloudInterconnectWorkloadLinkTypeEnum = "LINK_TYPE_ETHERNET_10G_LR"
	CloudInterconnectWorkloadLinkTypeEnumLinkTypeEthernet100GLr CloudInterconnectWorkloadLinkTypeEnum = "LINK_TYPE_ETHERNET_100G_LR"
)

// CloudInterconnectWorkload
// Specifies usage for Cloud Interconnect resources.
type CloudInterconnectWorkload struct {
	InterconnectAttachments []VlanAttachment                               `json:"interconnectAttachments,omitempty"`
	InterconnectType        *CloudInterconnectWorkloadInterconnectTypeEnum `json:"interconnectType,omitempty"`
	LinkType                *CloudInterconnectWorkloadLinkTypeEnum         `json:"linkType,omitempty"`
	ProvisionedLinkCount    *Usage                                         `json:"provisionedLinkCount,omitempty"`
}
