import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentConfig } from "./environmentconfig";
import { PySparkBatch } from "./pysparkbatch";
import { RuntimeConfig } from "./runtimeconfig";
import { RuntimeInfo, RuntimeInfoInput } from "./runtimeinfo";
import { SparkBatch } from "./sparkbatch";
import { SparkRBatch } from "./sparkrbatch";
import { SparkSqlBatch } from "./sparksqlbatch";
import { StateHistory } from "./statehistory";
/**
 * Output only. The state of the batch.
 */
export declare enum BatchStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Cancelling = "CANCELLING",
    Cancelled = "CANCELLED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
/**
 * A representation of a batch workload in the service.
 */
export declare class Batch extends SpeakeasyBase {
    /**
     * Output only. The time when the batch was created.
     */
    createTime?: string;
    /**
     * Output only. The email address of the user who created the batch.
     */
    creator?: string;
    /**
     * Environment configuration for a workload.
     */
    environmentConfig?: EnvironmentConfig;
    /**
     * Optional. The labels to associate with this batch. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a batch.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The resource name of the batch.
     */
    name?: string;
    /**
     * Output only. The resource name of the operation associated with this batch.
     */
    operation?: string;
    /**
     * A configuration for running an Apache PySpark (https://spark.apache.org/docs/latest/api/python/getting_started/quickstart.html) batch workload.
     */
    pysparkBatch?: PySparkBatch;
    /**
     * Runtime configuration for a workload.
     */
    runtimeConfig?: RuntimeConfig;
    /**
     * Runtime information about workload execution.
     */
    runtimeInfo?: RuntimeInfo;
    /**
     * A configuration for running an Apache Spark (https://spark.apache.org/) batch workload.
     */
    sparkBatch?: SparkBatch;
    /**
     * A configuration for running an Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) batch workload.
     */
    sparkRBatch?: SparkRBatch;
    /**
     * A configuration for running Apache Spark SQL (https://spark.apache.org/sql/) queries as a batch workload.
     */
    sparkSqlBatch?: SparkSqlBatch;
    /**
     * Output only. The state of the batch.
     */
    state?: BatchStateEnum;
    /**
     * Output only. Historical state information for the batch.
     */
    stateHistory?: StateHistory[];
    /**
     * Output only. Batch state details, such as a failure description if the state is FAILED.
     */
    stateMessage?: string;
    /**
     * Output only. The time when the batch entered a current state.
     */
    stateTime?: string;
    /**
     * Output only. A batch UUID (Unique Universal Identifier). The service generates this value when it creates the batch.
     */
    uuid?: string;
}
/**
 * A representation of a batch workload in the service.
 */
export declare class BatchInput extends SpeakeasyBase {
    /**
     * Environment configuration for a workload.
     */
    environmentConfig?: EnvironmentConfig;
    /**
     * Optional. The labels to associate with this batch. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a batch.
     */
    labels?: Record<string, string>;
    /**
     * A configuration for running an Apache PySpark (https://spark.apache.org/docs/latest/api/python/getting_started/quickstart.html) batch workload.
     */
    pysparkBatch?: PySparkBatch;
    /**
     * Runtime configuration for a workload.
     */
    runtimeConfig?: RuntimeConfig;
    /**
     * Runtime information about workload execution.
     */
    runtimeInfo?: RuntimeInfoInput;
    /**
     * A configuration for running an Apache Spark (https://spark.apache.org/) batch workload.
     */
    sparkBatch?: SparkBatch;
    /**
     * A configuration for running an Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) batch workload.
     */
    sparkRBatch?: SparkRBatch;
    /**
     * A configuration for running Apache Spark SQL (https://spark.apache.org/sql/) queries as a batch workload.
     */
    sparkSqlBatch?: SparkSqlBatch;
}
