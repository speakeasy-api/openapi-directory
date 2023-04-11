import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User’s permission for this domain. Assigned by the server.
 */
export declare enum DomainPermissionEnum {
    PermissionUnspecified = "PERMISSION_UNSPECIFIED",
    Owner = "OWNER",
    Reader = "READER",
    None = "NONE"
}
/**
 * A registered domain resource in the Postmaster API.
 */
export declare class Domain extends SpeakeasyBase {
    /**
     * Timestamp when the user registered this domain. Assigned by the server.
     */
    createTime?: string;
    /**
     * The resource name of the Domain. Domain names have the form `domains/{domain_name}`, where domain_name is the fully qualified domain name (i.e., mymail.mydomain.com).
     */
    name?: string;
    /**
     * User’s permission for this domain. Assigned by the server.
     */
    permission?: DomainPermissionEnum;
}
