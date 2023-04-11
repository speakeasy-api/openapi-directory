import { SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";
import { LocalObjectReference } from "./localobjectreference";
import { Volume } from "./volume";
/**
 * RevisionSpec holds the desired state of the Revision (from the client).
 */
export declare class RevisionSpec extends SpeakeasyBase {
    /**
     * ContainerConcurrency specifies the maximum allowed in-flight (concurrent) requests per container instance of the Revision. If not specified, defaults to 80.
     */
    containerConcurrency?: number;
    /**
     * Containers holds the single container that defines the unit of execution for this Revision. In the context of a Revision, we disallow a number of fields on this Container, including: name and lifecycle. In Cloud Run, only a single container may be provided. The runtime contract is documented here: https://github.com/knative/specs/blob/main/specs/serving/runtime-contract.md
     */
    containers?: Container[];
    /**
     * Not supported by Cloud Run.
     */
    enableServiceLinks?: boolean;
    /**
     * Not supported by Cloud Run.
     */
    imagePullSecrets?: LocalObjectReference[];
    /**
     * Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.
     */
    serviceAccountName?: string;
    /**
     * TimeoutSeconds holds the max duration the instance is allowed for responding to a request. Cloud Run: defaults to 300 seconds (5 minutes). Maximum allowed value is 3600 seconds (1 hour).
     */
    timeoutSeconds?: number;
    volumes?: Volume[];
}
