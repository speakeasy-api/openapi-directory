import { SpeakeasyBase } from "../../../internal/utils";
export declare class Privilege extends SpeakeasyBase {
    /**
     * A list of child privileges. Privileges for a service form a tree. Each privilege can have a list of child privileges; this list is empty for a leaf privilege.
     */
    childPrivileges?: Privilege[];
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * If the privilege can be restricted to an organization unit.
     */
    isOuScopable?: boolean;
    /**
     * The type of the API resource. This is always `admin#directory#privilege`.
     */
    kind?: string;
    /**
     * The name of the privilege.
     */
    privilegeName?: string;
    /**
     * The obfuscated ID of the service this privilege is for. This value is returned with [`Privileges.list()`](/admin-sdk/directory/v1/reference/privileges/list).
     */
    serviceId?: string;
    /**
     * The name of the service this privilege is for.
     */
    serviceName?: string;
}
