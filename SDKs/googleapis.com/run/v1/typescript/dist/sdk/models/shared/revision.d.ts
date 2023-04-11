import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectMeta } from "./objectmeta";
import { RevisionSpec } from "./revisionspec";
import { RevisionStatus } from "./revisionstatus";
/**
 * Revision is an immutable snapshot of code and configuration. A revision references a container image. Revisions are created by updates to a Configuration. See also: https://github.com/knative/specs/blob/main/specs/serving/overview.md#revision
 */
export declare class Revision extends SpeakeasyBase {
    /**
     * The API version for this call such as "serving.knative.dev/v1".
     */
    apiVersion?: string;
    /**
     * The kind of this resource, in this case "Revision".
     */
    kind?: string;
    /**
     * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
     */
    metadata?: ObjectMeta;
    /**
     * RevisionSpec holds the desired state of the Revision (from the client).
     */
    spec?: RevisionSpec;
    /**
     * RevisionStatus communicates the observed state of the Revision (from the controller).
     */
    status?: RevisionStatus;
}
