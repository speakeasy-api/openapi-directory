import { SpeakeasyBase } from "../../../internal/utils";
import { CloudSqlProperties, CloudSqlPropertiesInput } from "./cloudsqlproperties";
/**
 * Configuration parameters to establish connection with an external data source, except the credential attributes.
 */
export declare class Connection extends SpeakeasyBase {
    /**
     * Connection properties specific to the Cloud SQL.
     */
    cloudSql?: CloudSqlProperties;
    /**
     * Output only. The creation timestamp of the connection.
     */
    creationTime?: string;
    /**
     * User provided description.
     */
    description?: string;
    /**
     * User provided display name for the connection.
     */
    friendlyName?: string;
    /**
     * Output only. True, if credential is configured for this connection.
     */
    hasCredential?: boolean;
    /**
     * Output only. The last update timestamp of the connection.
     */
    lastModifiedTime?: string;
    /**
     * The resource name of the connection in the form of: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`
     */
    name?: string;
}
/**
 * Configuration parameters to establish connection with an external data source, except the credential attributes.
 */
export declare class ConnectionInput extends SpeakeasyBase {
    /**
     * Connection properties specific to the Cloud SQL.
     */
    cloudSql?: CloudSqlPropertiesInput;
    /**
     * User provided description.
     */
    description?: string;
    /**
     * User provided display name for the connection.
     */
    friendlyName?: string;
    /**
     * The resource name of the connection in the form of: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`
     */
    name?: string;
}
