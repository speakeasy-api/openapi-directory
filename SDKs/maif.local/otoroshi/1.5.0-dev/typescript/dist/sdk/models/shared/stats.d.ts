import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Live stats for a service or globally
 */
export declare class Stats extends SpeakeasyBase {
    /**
     * Number of calls on the specified service or globally
     */
    calls: number;
    /**
     * The number of concurrent request currently
     */
    concurrentHandledRequests: number;
    /**
     * The amount of data sent to the specified service or Otoroshi globally
     */
    dataIn: number;
    /**
     * The rate of data sent to the specified service or Otoroshi globally
     */
    dataInRate: number;
    /**
     * The amount of data sent from the specified service or Otoroshi globally
     */
    dataOut: number;
    /**
     * The rate of data sent from the specified service or Otoroshi globally
     */
    dataOutRate: number;
    /**
     * The average duration for a call
     */
    duration: number;
    /**
     * The average overhead time induced by Otoroshi for each call
     */
    overhead: number;
    /**
     * The rate of data sent from and to the specified service or Otoroshi globally
     */
    rate: number;
}
