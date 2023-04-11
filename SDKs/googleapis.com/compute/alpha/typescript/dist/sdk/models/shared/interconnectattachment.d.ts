import { SpeakeasyBase } from "../../../internal/utils";
import { InterconnectAttachmentConfigurationConstraints } from "./interconnectattachmentconfigurationconstraints";
import { InterconnectAttachmentPartnerMetadata } from "./interconnectattachmentpartnermetadata";
import { InterconnectAttachmentPrivateInfo } from "./interconnectattachmentprivateinfo";
/**
 * Provisioned bandwidth capacity for the interconnect attachment. For attachments of type DEDICATED, the user can set the bandwidth. For attachments of type PARTNER, the Google Partner that is operating the interconnect must set the bandwidth. Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED, and can take one of the following values: - BPS_50M: 50 Mbit/s - BPS_100M: 100 Mbit/s - BPS_200M: 200 Mbit/s - BPS_300M: 300 Mbit/s - BPS_400M: 400 Mbit/s - BPS_500M: 500 Mbit/s - BPS_1G: 1 Gbit/s - BPS_2G: 2 Gbit/s - BPS_5G: 5 Gbit/s - BPS_10G: 10 Gbit/s - BPS_20G: 20 Gbit/s - BPS_50G: 50 Gbit/s
 */
export declare enum InterconnectAttachmentBandwidthEnum {
    Bps100M = "BPS_100M",
    Bps10G = "BPS_10G",
    Bps1G = "BPS_1G",
    Bps200M = "BPS_200M",
    Bps20G = "BPS_20G",
    Bps2G = "BPS_2G",
    Bps300M = "BPS_300M",
    Bps400M = "BPS_400M",
    Bps500M = "BPS_500M",
    Bps50G = "BPS_50G",
    Bps50M = "BPS_50M",
    Bps5G = "BPS_5G"
}
/**
 * Desired availability domain for the attachment. Only available for type PARTNER, at creation time, and can take one of the following values: - AVAILABILITY_DOMAIN_ANY - AVAILABILITY_DOMAIN_1 - AVAILABILITY_DOMAIN_2 For improved reliability, customers should configure a pair of attachments, one per availability domain. The selected availability domain will be provided to the Partner via the pairing key, so that the provisioned circuit will lie in the specified domain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY.
 */
export declare enum InterconnectAttachmentEdgeAvailabilityDomainEnum {
    AvailabilityDomain1 = "AVAILABILITY_DOMAIN_1",
    AvailabilityDomain2 = "AVAILABILITY_DOMAIN_2",
    AvailabilityDomainAny = "AVAILABILITY_DOMAIN_ANY"
}
/**
 * Indicates the user-supplied encryption option of this VLAN attachment (interconnectAttachment). Can only be specified at attachment creation for PARTNER or DEDICATED attachments. Possible values are: - NONE - This is the default value, which means that the VLAN attachment carries unencrypted traffic. VMs are able to send traffic to, or receive traffic from, such a VLAN attachment. - IPSEC - The VLAN attachment carries only encrypted traffic that is encrypted by an IPsec device, such as an HA VPN gateway or third-party IPsec VPN. VMs cannot directly send traffic to, or receive traffic from, such a VLAN attachment. To use *HA VPN over Cloud Interconnect*, the VLAN attachment must be created with this option.
 */
export declare enum InterconnectAttachmentEncryptionEnum {
    Ipsec = "IPSEC",
    None = "NONE"
}
/**
 * [Output Only] The current status of whether or not this interconnect attachment is functional, which can take one of the following values: - OS_ACTIVE: The attachment has been turned up and is ready to use. - OS_UNPROVISIONED: The attachment is not ready to use yet, because turnup is not complete.
 */
export declare enum InterconnectAttachmentOperationalStatusEnum {
    OsActive = "OS_ACTIVE",
    OsUnprovisioned = "OS_UNPROVISIONED"
}
/**
 * The stack type for this interconnect attachment to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used. This field can be both set at interconnect attachments creation and update interconnect attachment operations.
 */
export declare enum InterconnectAttachmentStackTypeEnum {
    Ipv4Ipv6 = "IPV4_IPV6",
    Ipv4Only = "IPV4_ONLY"
}
/**
 * [Output Only] The current state of this attachment's functionality. Enum values ACTIVE and UNPROVISIONED are shared by DEDICATED/PRIVATE, PARTNER, and PARTNER_PROVIDER interconnect attachments, while enum values PENDING_PARTNER, PARTNER_REQUEST_RECEIVED, and PENDING_CUSTOMER are used for only PARTNER and PARTNER_PROVIDER interconnect attachments. This state can take one of the following values: - ACTIVE: The attachment has been turned up and is ready to use. - UNPROVISIONED: The attachment is not ready to use yet, because turnup is not complete. - PENDING_PARTNER: A newly-created PARTNER attachment that has not yet been configured on the Partner side. - PARTNER_REQUEST_RECEIVED: A PARTNER attachment is in the process of provisioning after a PARTNER_PROVIDER attachment was created that references it. - PENDING_CUSTOMER: A PARTNER or PARTNER_PROVIDER attachment that is waiting for a customer to activate it. - DEFUNCT: The attachment was deleted externally and is no longer functional. This could be because the associated Interconnect was removed, or because the other side of a Partner attachment was deleted.
 */
export declare enum InterconnectAttachmentStateEnum {
    Active = "ACTIVE",
    Defunct = "DEFUNCT",
    PartnerRequestReceived = "PARTNER_REQUEST_RECEIVED",
    PendingCustomer = "PENDING_CUSTOMER",
    PendingPartner = "PENDING_PARTNER",
    StateUnspecified = "STATE_UNSPECIFIED",
    Unprovisioned = "UNPROVISIONED"
}
/**
 * The type of interconnect attachment this is, which can take one of the following values: - DEDICATED: an attachment to a Dedicated Interconnect. - PARTNER: an attachment to a Partner Interconnect, created by the customer. - PARTNER_PROVIDER: an attachment to a Partner Interconnect, created by the partner.
 */
export declare enum InterconnectAttachmentTypeEnum {
    Dedicated = "DEDICATED",
    Partner = "PARTNER",
    PartnerProvider = "PARTNER_PROVIDER"
}
/**
 * Represents an Interconnect Attachment (VLAN) resource. You can use Interconnect attachments (VLANS) to connect your Virtual Private Cloud networks to your on-premises networks through an Interconnect. For more information, read Creating VLAN Attachments.
 */
export declare class InterconnectAttachment extends SpeakeasyBase {
    /**
     * Determines whether this Attachment will carry packets. Not present for PARTNER_PROVIDER.
     */
    adminEnabled?: boolean;
    /**
     * Provisioned bandwidth capacity for the interconnect attachment. For attachments of type DEDICATED, the user can set the bandwidth. For attachments of type PARTNER, the Google Partner that is operating the interconnect must set the bandwidth. Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED, and can take one of the following values: - BPS_50M: 50 Mbit/s - BPS_100M: 100 Mbit/s - BPS_200M: 200 Mbit/s - BPS_300M: 300 Mbit/s - BPS_400M: 400 Mbit/s - BPS_500M: 500 Mbit/s - BPS_1G: 1 Gbit/s - BPS_2G: 2 Gbit/s - BPS_5G: 5 Gbit/s - BPS_10G: 10 Gbit/s - BPS_20G: 20 Gbit/s - BPS_50G: 50 Gbit/s
     */
    bandwidth?: InterconnectAttachmentBandwidthEnum;
    /**
     * This field is not available.
     */
    candidateIpv6Subnets?: string[];
    /**
     * Up to 16 candidate prefixes that can be used to restrict the allocation of cloudRouterIpAddress and customerRouterIpAddress for this attachment. All prefixes must be within link-local address space (169.254.0.0/16) and must be /29 or shorter (/28, /27, etc). Google will attempt to select an unused /29 from the supplied candidate prefix(es). The request will fail if all possible /29s are in use on Google's edge. If not supplied, Google will randomly select an unused /29 from all of link-local space.
     */
    candidateSubnets?: string[];
    /**
     * [Output Only] IPv4 address + prefix length to be configured on Cloud Router Interface for this interconnect attachment.
     */
    cloudRouterIpAddress?: string;
    /**
     * [Output Only] IPv6 address + prefix length to be configured on Cloud Router Interface for this interconnect attachment.
     */
    cloudRouterIpv6Address?: string;
    /**
     * This field is not available.
     */
    cloudRouterIpv6InterfaceId?: string;
    configurationConstraints?: InterconnectAttachmentConfigurationConstraints;
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * [Output Only] IPv4 address + prefix length to be configured on the customer router subinterface for this interconnect attachment.
     */
    customerRouterIpAddress?: string;
    /**
     * [Output Only] IPv6 address + prefix length to be configured on the customer router subinterface for this interconnect attachment.
     */
    customerRouterIpv6Address?: string;
    /**
     * This field is not available.
     */
    customerRouterIpv6InterfaceId?: string;
    /**
     * [Output Only] Dataplane version for this InterconnectAttachment. This field is only present for Dataplane version 2 and higher. Absence of this field in the API output indicates that the Dataplane is version 1.
     */
    dataplaneVersion?: number;
    /**
     * An optional description of this resource.
     */
    description?: string;
    /**
     * Desired availability domain for the attachment. Only available for type PARTNER, at creation time, and can take one of the following values: - AVAILABILITY_DOMAIN_ANY - AVAILABILITY_DOMAIN_1 - AVAILABILITY_DOMAIN_2 For improved reliability, customers should configure a pair of attachments, one per availability domain. The selected availability domain will be provided to the Partner via the pairing key, so that the provisioned circuit will lie in the specified domain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY.
     */
    edgeAvailabilityDomain?: InterconnectAttachmentEdgeAvailabilityDomainEnum;
    /**
     * Indicates the user-supplied encryption option of this VLAN attachment (interconnectAttachment). Can only be specified at attachment creation for PARTNER or DEDICATED attachments. Possible values are: - NONE - This is the default value, which means that the VLAN attachment carries unencrypted traffic. VMs are able to send traffic to, or receive traffic from, such a VLAN attachment. - IPSEC - The VLAN attachment carries only encrypted traffic that is encrypted by an IPsec device, such as an HA VPN gateway or third-party IPsec VPN. VMs cannot directly send traffic to, or receive traffic from, such a VLAN attachment. To use *HA VPN over Cloud Interconnect*, the VLAN attachment must be created with this option.
     */
    encryption?: InterconnectAttachmentEncryptionEnum;
    /**
     * [Output Only] Google reference ID, to be used when raising support tickets with Google or otherwise to debug backend connectivity issues. [Deprecated] This field is not used.
     */
    googleReferenceId?: string;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * URL of the underlying Interconnect object that this attachment's traffic will traverse through.
     */
    interconnect?: string;
    /**
     * A list of URLs of addresses that have been reserved for the VLAN attachment. Used only for the VLAN attachment that has the encryption option as IPSEC. The addresses must be regional internal IP address ranges. When creating an HA VPN gateway over the VLAN attachment, if the attachment is configured to use a regional internal IP address, then the VPN gateway's IP address is allocated from the IP address range specified here. For example, if the HA VPN gateway's interface 0 is paired to this VLAN attachment, then a regional internal IP address for the VPN gateway interface 0 will be allocated from the IP address specified for this VLAN attachment. If this field is not specified when creating the VLAN attachment, then later on when creating an HA VPN gateway on this VLAN attachment, the HA VPN gateway's IP address is allocated from the regional external IP address pool. Not currently available publicly.
     */
    ipsecInternalAddresses?: string[];
    /**
     * [Output Only] Type of the resource. Always compute#interconnectAttachment for interconnect attachments.
     */
    kind?: string;
    /**
     * A fingerprint for the labels being applied to this InterconnectAttachment, which is essentially a hash of the labels set used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve an InterconnectAttachment.
     */
    labelFingerprint?: string;
    /**
     * Labels for this resource. These can only be added or modified by the setLabels method. Each label key/value pair must comply with RFC1035. Label values may be empty.
     */
    labels?: Record<string, string>;
    /**
     * Maximum Transmission Unit (MTU), in bytes, of packets passing through this interconnect attachment. Only 1440 and 1500 are allowed. If not specified, the value will default to 1440.
     */
    mtu?: number;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * [Output Only] The current status of whether or not this interconnect attachment is functional, which can take one of the following values: - OS_ACTIVE: The attachment has been turned up and is ready to use. - OS_UNPROVISIONED: The attachment is not ready to use yet, because turnup is not complete.
     */
    operationalStatus?: InterconnectAttachmentOperationalStatusEnum;
    /**
     * [Output only for type PARTNER. Input only for PARTNER_PROVIDER. Not present for DEDICATED]. The opaque identifier of an PARTNER attachment used to initiate provisioning with a selected partner. Of the form "XXXXX/region/domain"
     */
    pairingKey?: string;
    /**
     * Optional BGP ASN for the router supplied by a Layer 3 Partner if they configured BGP on behalf of the customer. Output only for PARTNER type, input only for PARTNER_PROVIDER, not available for DEDICATED.
     */
    partnerAsn?: string;
    /**
     * Informational metadata about Partner attachments from Partners to display to customers. These fields are propagated from PARTNER_PROVIDER attachments to their corresponding PARTNER attachments.
     */
    partnerMetadata?: InterconnectAttachmentPartnerMetadata;
    /**
     * Information for an interconnect attachment when this belongs to an interconnect of type DEDICATED.
     */
    privateInterconnectInfo?: InterconnectAttachmentPrivateInfo;
    /**
     * [Output Only] URL of the region where the regional interconnect attachment resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
     */
    region?: string;
    /**
     * [Output Only] If the attachment is on a Cross-Cloud Interconnect connection, this field contains the interconnect's remote location service provider. Example values: "Amazon Web Services" "Microsoft Azure". The field is set only for attachments on Cross-Cloud Interconnect connections. Its value is copied from the InterconnectRemoteLocation remoteService field.
     */
    remoteService?: string;
    /**
     * URL of the Cloud Router to be used for dynamic routing. This router must be in the same region as this InterconnectAttachment. The InterconnectAttachment will automatically connect the Interconnect to the network & region within which the Cloud Router is configured.
     */
    router?: string;
    /**
     * [Output Only] Reserved for future use.
     */
    satisfiesPzs?: boolean;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] Server-defined URL for this resource with the resource id.
     */
    selfLinkWithId?: string;
    /**
     * The stack type for this interconnect attachment to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used. This field can be both set at interconnect attachments creation and update interconnect attachment operations.
     */
    stackType?: InterconnectAttachmentStackTypeEnum;
    /**
     * [Output Only] The current state of this attachment's functionality. Enum values ACTIVE and UNPROVISIONED are shared by DEDICATED/PRIVATE, PARTNER, and PARTNER_PROVIDER interconnect attachments, while enum values PENDING_PARTNER, PARTNER_REQUEST_RECEIVED, and PENDING_CUSTOMER are used for only PARTNER and PARTNER_PROVIDER interconnect attachments. This state can take one of the following values: - ACTIVE: The attachment has been turned up and is ready to use. - UNPROVISIONED: The attachment is not ready to use yet, because turnup is not complete. - PENDING_PARTNER: A newly-created PARTNER attachment that has not yet been configured on the Partner side. - PARTNER_REQUEST_RECEIVED: A PARTNER attachment is in the process of provisioning after a PARTNER_PROVIDER attachment was created that references it. - PENDING_CUSTOMER: A PARTNER or PARTNER_PROVIDER attachment that is waiting for a customer to activate it. - DEFUNCT: The attachment was deleted externally and is no longer functional. This could be because the associated Interconnect was removed, or because the other side of a Partner attachment was deleted.
     */
    state?: InterconnectAttachmentStateEnum;
    /**
     * Length of the IPv4 subnet mask. Allowed values: - 29 (default) - 30 The default value is 29, except for Cross-Cloud Interconnect connections that use an InterconnectRemoteLocation with a constraints.subnetLengthRange.min equal to 30. For example, connections that use an Azure remote location fall into this category. In these cases, the default value is 30, and requesting 29 returns an error. Where both 29 and 30 are allowed, 29 is preferred, because it gives Google Cloud Support more debugging visibility.
     */
    subnetLength?: number;
    /**
     * The type of interconnect attachment this is, which can take one of the following values: - DEDICATED: an attachment to a Dedicated Interconnect. - PARTNER: an attachment to a Partner Interconnect, created by the customer. - PARTNER_PROVIDER: an attachment to a Partner Interconnect, created by the partner.
     */
    type?: InterconnectAttachmentTypeEnum;
    /**
     * The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4093. Only specified at creation time.
     */
    vlanTag8021q?: number;
}
