import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Reference to another Cloud SQL instance.
 */
export declare class InstanceReference extends SpeakeasyBase {
    /**
     * The name of the Cloud SQL instance being referenced. This does not include the project ID.
     */
    name?: string;
    /**
     * The project ID of the Cloud SQL instance being referenced. The default is the same project ID as the instance references it.
     */
    project?: string;
    /**
     * The region of the Cloud SQL instance being referenced.
     */
    region?: string;
}
