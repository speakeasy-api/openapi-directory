import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2CloudSqlInstance } from "./googlecloudrunv2cloudsqlinstance";
import { GoogleCloudRunV2SecretVolumeSource } from "./googlecloudrunv2secretvolumesource";
/**
 * Volume represents a named volume in a container.
 */
export declare class GoogleCloudRunV2Volume extends SpeakeasyBase {
    /**
     * Represents a set of Cloud SQL instances. Each one will be available under /cloudsql/[instance]. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.
     */
    cloudSqlInstance?: GoogleCloudRunV2CloudSqlInstance;
    /**
     * Required. Volume's name.
     */
    name?: string;
    /**
     * The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret.
     */
    secret?: GoogleCloudRunV2SecretVolumeSource;
}
