import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorProto } from "./errorproto";
export declare class JobStatus extends SpeakeasyBase {
    errorResult?: ErrorProto;
    /**
     * [Output-only] The first errors encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful.
     */
    errors?: ErrorProto[];
    /**
     * [Output-only] Running state of the job.
     */
    state?: string;
}
