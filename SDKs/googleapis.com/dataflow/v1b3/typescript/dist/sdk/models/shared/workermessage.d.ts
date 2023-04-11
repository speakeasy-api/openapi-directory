import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceUtilizationReport } from "./resourceutilizationreport";
import { WorkerHealthReport } from "./workerhealthreport";
import { WorkerLifecycleEvent } from "./workerlifecycleevent";
import { WorkerMessageCode } from "./workermessagecode";
import { WorkerShutdownNotice } from "./workershutdownnotice";
import { WorkerThreadScalingReport } from "./workerthreadscalingreport";
/**
 * WorkerMessage provides information to the backend about a worker.
 */
export declare class WorkerMessage extends SpeakeasyBase {
    /**
     * Labels are used to group WorkerMessages. For example, a worker_message about a particular container might have the labels: { "JOB_ID": "2015-04-22", "WORKER_ID": "wordcount-vm-2015…" "CONTAINER_TYPE": "worker", "CONTAINER_ID": "ac1234def"} Label tags typically correspond to Label enum values. However, for ease of development other strings can be used as tags. LABEL_UNSPECIFIED should not be used here.
     */
    labels?: Record<string, string>;
    /**
     * The timestamp of the worker_message.
     */
    time?: string;
    /**
     * WorkerHealthReport contains information about the health of a worker. The VM should be identified by the labels attached to the WorkerMessage that this health ping belongs to.
     */
    workerHealthReport?: WorkerHealthReport;
    /**
     * A report of an event in a worker's lifecycle. The proto contains one event, because the worker is expected to asynchronously send each message immediately after the event. Due to this asynchrony, messages may arrive out of order (or missing), and it is up to the consumer to interpret. The timestamp of the event is in the enclosing WorkerMessage proto.
     */
    workerLifecycleEvent?: WorkerLifecycleEvent;
    /**
     * A message code is used to report status and error messages to the service. The message codes are intended to be machine readable. The service will take care of translating these into user understandable messages if necessary. Example use cases: 1. Worker processes reporting successful startup. 2. Worker processes reporting specific errors (e.g. package staging failure).
     */
    workerMessageCode?: WorkerMessageCode;
    /**
     * Worker metrics exported from workers. This contains resource utilization metrics accumulated from a variety of sources. For more information, see go/df-resource-signals.
     */
    workerMetrics?: ResourceUtilizationReport;
    /**
     * Shutdown notification from workers. This is to be sent by the shutdown script of the worker VM so that the backend knows that the VM is being shut down.
     */
    workerShutdownNotice?: WorkerShutdownNotice;
    /**
     * Contains information about the thread scaling information of a worker.
     */
    workerThreadScalingReport?: WorkerThreadScalingReport;
}
