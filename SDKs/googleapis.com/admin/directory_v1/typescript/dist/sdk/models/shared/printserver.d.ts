import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for a print server.
 */
export declare class PrintServerInput extends SpeakeasyBase {
    /**
     * Editable. Description of the print server (as shown in the Admin console).
     */
    description?: string;
    /**
     * Editable. Display name of the print server (as shown in the Admin console).
     */
    displayName?: string;
    /**
     * Immutable. ID of the print server. Leave empty when creating.
     */
    id?: string;
    /**
     * Immutable. Resource name of the print server. Leave empty when creating. Format: `customers/{customer.id}/printServers/{print_server.id}`
     */
    name?: string;
    /**
     * ID of the organization unit (OU) that owns this print server. This value can only be set when the print server is initially created. If it's not populated, the print server is placed under the root OU. The `org_unit_id` can be retrieved using the [Directory API](/admin-sdk/directory/reference/rest/v1/orgunits).
     */
    orgUnitId?: string;
    /**
     * Editable. Print server URI.
     */
    uri?: string;
}
/**
 * Configuration for a print server.
 */
export declare class PrintServer extends SpeakeasyBase {
    /**
     * Output only. Time when the print server was created.
     */
    createTime?: string;
    /**
     * Editable. Description of the print server (as shown in the Admin console).
     */
    description?: string;
    /**
     * Editable. Display name of the print server (as shown in the Admin console).
     */
    displayName?: string;
    /**
     * Immutable. ID of the print server. Leave empty when creating.
     */
    id?: string;
    /**
     * Immutable. Resource name of the print server. Leave empty when creating. Format: `customers/{customer.id}/printServers/{print_server.id}`
     */
    name?: string;
    /**
     * ID of the organization unit (OU) that owns this print server. This value can only be set when the print server is initially created. If it's not populated, the print server is placed under the root OU. The `org_unit_id` can be retrieved using the [Directory API](/admin-sdk/directory/reference/rest/v1/orgunits).
     */
    orgUnitId?: string;
    /**
     * Editable. Print server URI.
     */
    uri?: string;
}
