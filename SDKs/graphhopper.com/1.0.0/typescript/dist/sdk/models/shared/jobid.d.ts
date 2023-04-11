import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A jobId you can use to retrieve your solution from the server - see solution endpoint.
 */
export declare class JobId extends SpeakeasyBase {
    /**
     * UUID. Unique id for your job/request with which you can fetch your solution
     */
    jobId?: string;
}
