import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Cloud SQL configuration.
 */
export declare class CloudSQLConfig extends SpeakeasyBase {
    /**
     * Peering service used for peering with the Cloud SQL project.
     */
    service?: string;
    /**
     * The name of the umbrella network in the Cloud SQL umbrella project.
     */
    umbrellaNetwork?: string;
    /**
     * The project number of the Cloud SQL umbrella project.
     */
    umbrellaProject?: string;
}
