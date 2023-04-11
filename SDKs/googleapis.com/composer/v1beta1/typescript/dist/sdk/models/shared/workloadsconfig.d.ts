import { SpeakeasyBase } from "../../../internal/utils";
import { SchedulerResource } from "./schedulerresource";
import { TriggererResource } from "./triggererresource";
import { WebServerResource } from "./webserverresource";
import { WorkerResource } from "./workerresource";
/**
 * The Kubernetes workloads configuration for GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
 */
export declare class WorkloadsConfig extends SpeakeasyBase {
    /**
     * Configuration for resources used by Airflow schedulers.
     */
    scheduler?: SchedulerResource;
    /**
     * Configuration for resources used by Airflow triggerers.
     */
    triggerer?: TriggererResource;
    /**
     * Configuration for resources used by Airflow web server.
     */
    webServer?: WebServerResource;
    /**
     * Configuration for resources used by Airflow workers.
     */
    worker?: WorkerResource;
}
