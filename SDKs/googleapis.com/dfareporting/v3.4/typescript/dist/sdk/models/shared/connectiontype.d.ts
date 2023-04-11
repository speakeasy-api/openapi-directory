import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about an internet connection type that can be targeted by ads. Clients can use the connection type to target mobile vs. broadband users.
 */
export declare class ConnectionType extends SpeakeasyBase {
    /**
     * ID of this connection type.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionType".
     */
    kind?: string;
    /**
     * Name of this connection type.
     */
    name?: string;
}
