import { SpeakeasyBase } from "../../../internal/utils";
import { CloudRun } from "./cloudrun";
import { Gke } from "./gke";
/**
 * Represents a target of an invocation over HTTP.
 */
export declare class Destination extends SpeakeasyBase {
    /**
     * The Cloud Function resource name. Only Cloud Functions V2 is supported. Format: `projects/{project}/locations/{location}/functions/{function}` This is a read-only field. Creating Cloud Functions V2 triggers is only supported via the Cloud Functions product. An error will be returned if the user sets this value.
     */
    cloudFunction?: string;
    /**
     * Represents a Cloud Run destination.
     */
    cloudRun?: CloudRun;
    /**
     * Represents a GKE destination.
     */
    gke?: Gke;
    /**
     * The resource name of the Workflow whose Executions are triggered by the events. The Workflow resource should be deployed in the same project as the trigger. Format: `projects/{project}/locations/{location}/workflows/{workflow}`
     */
    workflow?: string;
}
