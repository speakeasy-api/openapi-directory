import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationSpec } from "./configurationspec";
import { ConfigurationStatus } from "./configurationstatus";
import { ObjectMeta } from "./objectmeta";
/**
 * Configuration represents the "floating HEAD" of a linear history of Revisions, and optionally how the containers those revisions reference are built. Users create new Revisions by updating the Configuration's spec. The "latest created" revision's name is available under status, as is the "latest ready" revision's name. See also: https://github.com/knative/specs/blob/main/specs/serving/overview.md#configuration
 */
export declare class Configuration extends SpeakeasyBase {
    /**
     * The API version for this call such as "serving.knative.dev/v1".
     */
    apiVersion?: string;
    /**
     * The kind of resource, in this case always "Configuration".
     */
    kind?: string;
    /**
     * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
     */
    metadata?: ObjectMeta;
    /**
     * ConfigurationSpec holds the desired state of the Configuration (from the client).
     */
    spec?: ConfigurationSpec;
    /**
     * ConfigurationStatus communicates the observed state of the Configuration (from the controller).
     */
    status?: ConfigurationStatus;
}
