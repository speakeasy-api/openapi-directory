import { SpeakeasyBase } from "../../../internal/utils";
import { Trust } from "./trust";
/**
 * Output only. The current state of this domain.
 */
export declare enum DomainStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Repairing = "REPAIRING",
    PerformingMaintenance = "PERFORMING_MAINTENANCE",
    Unavailable = "UNAVAILABLE"
}
/**
 * Represents a managed Microsoft Active Directory domain. If the domain is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
 */
export declare class Domain extends SpeakeasyBase {
    /**
     * Optional. The name of delegated administrator account used to perform Active Directory operations. If not specified, `setupadmin` will be used.
     */
    admin?: string;
    /**
     * Optional. Configuration for audit logs. True if audit logs are enabled, else false. Default is audit logs disabled.
     */
    auditLogsEnabled?: boolean;
    /**
     * Optional. The full names of the Google Compute Engine [networks](/compute/docs/networks-and-firewalls#networks) the domain instance is connected to. Networks can be added using UpdateDomain. The domain is only available on networks listed in `authorized_networks`. If CIDR subnets overlap between networks, domain creation will fail.
     */
    authorizedNetworks?: string[];
    /**
     * Output only. The time the instance was created.
     */
    createTime?: string;
    /**
     * Output only. The fully-qualified domain name of the exposed domain used by clients to connect to the service. Similar to what would be chosen for an Active Directory set up on an internal network.
     */
    fqdn?: string;
    /**
     * Optional. Resource labels that can contain user-provided metadata.
     */
    labels?: Record<string, string>;
    /**
     * Required. Locations where domain needs to be provisioned. regions e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block.
     */
    locations?: string[];
    /**
     * Output only. The unique name of the domain using the form: `projects/{project_id}/locations/global/domains/{domain_name}`.
     */
    name?: string;
    /**
     * Required. The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger. Ranges must be unique and non-overlapping with existing subnets in [Domain].[authorized_networks].
     */
    reservedIpRange?: string;
    /**
     * Output only. The current state of this domain.
     */
    state?: DomainStateEnum;
    /**
     * Output only. Additional information about the current status of this domain, if available.
     */
    statusMessage?: string;
    /**
     * Output only. The current trusts associated with the domain.
     */
    trusts?: Trust[];
    /**
     * Output only. The last update time.
     */
    updateTime?: string;
}
/**
 * Represents a managed Microsoft Active Directory domain. If the domain is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
 */
export declare class DomainInput extends SpeakeasyBase {
    /**
     * Optional. The name of delegated administrator account used to perform Active Directory operations. If not specified, `setupadmin` will be used.
     */
    admin?: string;
    /**
     * Optional. Configuration for audit logs. True if audit logs are enabled, else false. Default is audit logs disabled.
     */
    auditLogsEnabled?: boolean;
    /**
     * Optional. The full names of the Google Compute Engine [networks](/compute/docs/networks-and-firewalls#networks) the domain instance is connected to. Networks can be added using UpdateDomain. The domain is only available on networks listed in `authorized_networks`. If CIDR subnets overlap between networks, domain creation will fail.
     */
    authorizedNetworks?: string[];
    /**
     * Optional. Resource labels that can contain user-provided metadata.
     */
    labels?: Record<string, string>;
    /**
     * Required. Locations where domain needs to be provisioned. regions e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block.
     */
    locations?: string[];
    /**
     * Required. The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger. Ranges must be unique and non-overlapping with existing subnets in [Domain].[authorized_networks].
     */
    reservedIpRange?: string;
}
