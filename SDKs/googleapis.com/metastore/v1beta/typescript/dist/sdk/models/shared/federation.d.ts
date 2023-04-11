import { SpeakeasyBase } from "../../../internal/utils";
import { BackendMetastore } from "./backendmetastore";
/**
 * Output only. The current state of the federation.
 */
export declare enum FederationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Error = "ERROR"
}
/**
 * Represents a federation of multiple backend metastores.
 */
export declare class Federation extends SpeakeasyBase {
    /**
     * A map from BackendMetastore rank to BackendMetastores from which the federation service serves metadata at query time. The map key represents the order in which BackendMetastores should be evaluated to resolve database names at query time and should be greater than or equal to zero. A BackendMetastore with a lower number will be evaluated before a BackendMetastore with a higher number.
     */
    backendMetastores?: Record<string, BackendMetastore>;
    /**
     * Output only. The time when the metastore federation was created.
     */
    createTime?: string;
    /**
     * Output only. The federation endpoint.
     */
    endpointUri?: string;
    /**
     * User-defined labels for the metastore federation.
     */
    labels?: Record<string, string>;
    /**
     * Immutable. The relative resource name of the federation, of the form: projects/{project_number}/locations/{location_id}/federations/{federation_id}`.
     */
    name?: string;
    /**
     * Output only. The current state of the federation.
     */
    state?: FederationStateEnum;
    /**
     * Output only. Additional information about the current state of the metastore federation, if available.
     */
    stateMessage?: string;
    /**
     * Output only. The globally unique resource identifier of the metastore federation.
     */
    uid?: string;
    /**
     * Output only. The time when the metastore federation was last updated.
     */
    updateTime?: string;
    /**
     * Immutable. The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version.
     */
    version?: string;
}
/**
 * Represents a federation of multiple backend metastores.
 */
export declare class FederationInput extends SpeakeasyBase {
    /**
     * A map from BackendMetastore rank to BackendMetastores from which the federation service serves metadata at query time. The map key represents the order in which BackendMetastores should be evaluated to resolve database names at query time and should be greater than or equal to zero. A BackendMetastore with a lower number will be evaluated before a BackendMetastore with a higher number.
     */
    backendMetastores?: Record<string, BackendMetastore>;
    /**
     * User-defined labels for the metastore federation.
     */
    labels?: Record<string, string>;
    /**
     * Immutable. The relative resource name of the federation, of the form: projects/{project_number}/locations/{location_id}/federations/{federation_id}`.
     */
    name?: string;
    /**
     * Immutable. The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version.
     */
    version?: string;
}
