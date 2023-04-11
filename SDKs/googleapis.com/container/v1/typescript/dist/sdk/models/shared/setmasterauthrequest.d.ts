import { SpeakeasyBase } from "../../../internal/utils";
import { MasterAuth } from "./masterauth";
/**
 * Required. The exact form of action to be taken on the master auth.
 */
export declare enum SetMasterAuthRequestActionEnum {
    Unknown = "UNKNOWN",
    SetPassword = "SET_PASSWORD",
    GeneratePassword = "GENERATE_PASSWORD",
    SetUsername = "SET_USERNAME"
}
/**
 * SetMasterAuthRequest updates the admin password of a cluster.
 */
export declare class SetMasterAuthRequest extends SpeakeasyBase {
    /**
     * Required. The exact form of action to be taken on the master auth.
     */
    action?: SetMasterAuthRequestActionEnum;
    /**
     * Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster) of the cluster to set auth. Specified in the format `projects/* /locations/* /clusters/*`.
     */
    name?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * The authentication information for accessing the master endpoint. Authentication can be done using HTTP basic auth or using client certificates.
     */
    update?: MasterAuth;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
}
