import { SpeakeasyBase } from "../../../internal/utils";
import { InterconnectCircuitInfo } from "./interconnectcircuitinfo";
import { InterconnectOutageNotification } from "./interconnectoutagenotification";
/**
 * Type of interconnect, which can take one of the following values: - PARTNER: A partner-managed interconnection shared between customers though a partner. - DEDICATED: A dedicated physical interconnection with the customer. Note that a value IT_PRIVATE has been deprecated in favor of DEDICATED.
 */
export declare enum InterconnectInterconnectTypeEnum {
    Dedicated = "DEDICATED",
    ItPrivate = "IT_PRIVATE",
    Partner = "PARTNER"
}
/**
 * Type of link requested, which can take one of the following values: - LINK_TYPE_ETHERNET_10G_LR: A 10G Ethernet with LR optics - LINK_TYPE_ETHERNET_100G_LR: A 100G Ethernet with LR optics. Note that this field indicates the speed of each of the links in the bundle, not the speed of the entire bundle.
 */
export declare enum InterconnectLinkTypeEnum {
    LinkTypeEthernet100GLr = "LINK_TYPE_ETHERNET_100G_LR",
    LinkTypeEthernet10GLr = "LINK_TYPE_ETHERNET_10G_LR"
}
/**
 * [Output Only] The current status of this Interconnect's functionality, which can take one of the following values: - OS_ACTIVE: A valid Interconnect, which is turned up and is ready to use. Attachments may be provisioned on this Interconnect. - OS_UNPROVISIONED: An Interconnect that has not completed turnup. No attachments may be provisioned on this Interconnect. - OS_UNDER_MAINTENANCE: An Interconnect that is undergoing internal maintenance. No attachments may be provisioned or updated on this Interconnect.
 */
export declare enum InterconnectOperationalStatusEnum {
    OsActive = "OS_ACTIVE",
    OsUnprovisioned = "OS_UNPROVISIONED"
}
/**
 * [Output Only] The current state of Interconnect functionality, which can take one of the following values: - ACTIVE: The Interconnect is valid, turned up and ready to use. Attachments may be provisioned on this Interconnect. - UNPROVISIONED: The Interconnect has not completed turnup. No attachments may be provisioned on this Interconnect. - UNDER_MAINTENANCE: The Interconnect is undergoing internal maintenance. No attachments may be provisioned or updated on this Interconnect.
 */
export declare enum InterconnectStateEnum {
    Active = "ACTIVE",
    Unprovisioned = "UNPROVISIONED"
}
/**
 * Represents an Interconnect resource. An Interconnect resource is a dedicated connection between the Google Cloud network and your on-premises network. For more information, read the Dedicated Interconnect Overview.
 */
export declare class Interconnect extends SpeakeasyBase {
    /**
     * Administrative status of the interconnect. When this is set to true, the Interconnect is functional and can carry traffic. When set to false, no packets can be carried over the interconnect and no BGP routes are exchanged over it. By default, the status is set to true.
     */
    adminEnabled?: boolean;
    /**
     * [Output Only] A list of CircuitInfo objects, that describe the individual circuits in this LAG.
     */
    circuitInfos?: InterconnectCircuitInfo[];
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * Customer name, to put in the Letter of Authorization as the party authorized to request a crossconnect.
     */
    customerName?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * [Output Only] A list of outages expected for this Interconnect.
     */
    expectedOutages?: InterconnectOutageNotification[];
    /**
     * [Output Only] IP address configured on the Google side of the Interconnect link. This can be used only for ping tests.
     */
    googleIpAddress?: string;
    /**
     * [Output Only] Google reference ID to be used when raising support tickets with Google or otherwise to debug backend connectivity issues.
     */
    googleReferenceId?: string;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] A list of the URLs of all InterconnectAttachments configured to use this Interconnect.
     */
    interconnectAttachments?: string[];
    /**
     * Type of interconnect, which can take one of the following values: - PARTNER: A partner-managed interconnection shared between customers though a partner. - DEDICATED: A dedicated physical interconnection with the customer. Note that a value IT_PRIVATE has been deprecated in favor of DEDICATED.
     */
    interconnectType?: InterconnectInterconnectTypeEnum;
    /**
     * [Output Only] Type of the resource. Always compute#interconnect for interconnects.
     */
    kind?: string;
    /**
     * Type of link requested, which can take one of the following values: - LINK_TYPE_ETHERNET_10G_LR: A 10G Ethernet with LR optics - LINK_TYPE_ETHERNET_100G_LR: A 100G Ethernet with LR optics. Note that this field indicates the speed of each of the links in the bundle, not the speed of the entire bundle.
     */
    linkType?: InterconnectLinkTypeEnum;
    /**
     * URL of the InterconnectLocation object that represents where this connection is to be provisioned.
     */
    location?: string;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * Email address to contact the customer NOC for operations and maintenance notifications regarding this Interconnect. If specified, this will be used for notifications in addition to all other forms described, such as Cloud Monitoring logs alerting and Cloud Notifications. This field is required for users who sign up for Cloud Interconnect using workforce identity federation.
     */
    nocContactEmail?: string;
    /**
     * [Output Only] The current status of this Interconnect's functionality, which can take one of the following values: - OS_ACTIVE: A valid Interconnect, which is turned up and is ready to use. Attachments may be provisioned on this Interconnect. - OS_UNPROVISIONED: An Interconnect that has not completed turnup. No attachments may be provisioned on this Interconnect. - OS_UNDER_MAINTENANCE: An Interconnect that is undergoing internal maintenance. No attachments may be provisioned or updated on this Interconnect.
     */
    operationalStatus?: InterconnectOperationalStatusEnum;
    /**
     * [Output Only] IP address configured on the customer side of the Interconnect link. The customer should configure this IP address during turnup when prompted by Google NOC. This can be used only for ping tests.
     */
    peerIpAddress?: string;
    /**
     * [Output Only] Number of links actually provisioned in this interconnect.
     */
    provisionedLinkCount?: number;
    /**
     * Target number of physical links in the link bundle, as requested by the customer.
     */
    requestedLinkCount?: number;
    /**
     * [Output Only] Reserved for future use.
     */
    satisfiesPzs?: boolean;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] The current state of Interconnect functionality, which can take one of the following values: - ACTIVE: The Interconnect is valid, turned up and ready to use. Attachments may be provisioned on this Interconnect. - UNPROVISIONED: The Interconnect has not completed turnup. No attachments may be provisioned on this Interconnect. - UNDER_MAINTENANCE: The Interconnect is undergoing internal maintenance. No attachments may be provisioned or updated on this Interconnect.
     */
    state?: InterconnectStateEnum;
}
