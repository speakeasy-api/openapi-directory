import { SpeakeasyBase } from "../../../internal/utils";
import { CloudSqlSettings, CloudSqlSettingsInput } from "./cloudsqlsettings";
/**
 * Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
 */
export declare class CloudSqlConnectionProfile extends SpeakeasyBase {
    /**
     * Output only. The Cloud SQL database instance's additional (outgoing) public IP. Used when the Cloud SQL database availability type is REGIONAL (i.e. multiple zones / highly available).
     */
    additionalPublicIp?: string;
    /**
     * Output only. The Cloud SQL instance ID that this connection profile is associated with.
     */
    cloudSqlId?: string;
    /**
     * Output only. The Cloud SQL database instance's private IP.
     */
    privateIp?: string;
    /**
     * Output only. The Cloud SQL database instance's public IP.
     */
    publicIp?: string;
    /**
     * Settings for creating a Cloud SQL database instance.
     */
    settings?: CloudSqlSettings;
}
/**
 * Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
 */
export declare class CloudSqlConnectionProfileInput extends SpeakeasyBase {
    /**
     * Settings for creating a Cloud SQL database instance.
     */
    settings?: CloudSqlSettingsInput;
}
