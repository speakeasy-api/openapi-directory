import { SpeakeasyBase } from "../../../internal/utils";
import { MetricValueSet } from "./metricvalueset";
/**
 * Quota mode for this operation.
 */
export declare enum QuotaOperationQuotaModeEnum {
    Unspecified = "UNSPECIFIED",
    Normal = "NORMAL",
    BestEffort = "BEST_EFFORT",
    CheckOnly = "CHECK_ONLY",
    AdjustOnly = "ADJUST_ONLY"
}
/**
 * Represents information regarding a quota operation.
 */
export declare class QuotaOperation extends SpeakeasyBase {
    /**
     * Identity of the consumer for whom this quota operation is being performed. This can be in one of the following formats: project:, project_number:, api_key:.
     */
    consumerId?: string;
    /**
     * Labels describing the operation.
     */
    labels?: Record<string, string>;
    /**
     * Fully qualified name of the API method for which this quota operation is requested. This name is used for matching quota rules or metric rules and billing status rules defined in service configuration. This field should not be set if any of the following is true: (1) the quota operation is performed on non-API resources. (2) quota_metrics is set because the caller is doing quota override. Example of an RPC method name: google.example.library.v1.LibraryService.CreateShelf
     */
    methodName?: string;
    /**
     * Identity of the operation. For Allocation Quota, this is expected to be unique within the scope of the service that generated the operation, and guarantees idempotency in case of retries. In order to ensure best performance and latency in the Quota backends, operation_ids are optimally associated with time, so that related operations can be accessed fast in storage. For this reason, the recommended token for services that intend to operate at a high QPS is Unix time in nanos + UUID
     */
    operationId?: string;
    /**
     * Represents information about this operation. Each MetricValueSet corresponds to a metric defined in the service configuration. The data type used in the MetricValueSet must agree with the data type specified in the metric definition. Within a single operation, it is not allowed to have more than one MetricValue instances that have the same metric names and identical label value combinations. If a request has such duplicated MetricValue instances, the entire request is rejected with an invalid argument error. This field is mutually exclusive with method_name.
     */
    quotaMetrics?: MetricValueSet[];
    /**
     * Quota mode for this operation.
     */
    quotaMode?: QuotaOperationQuotaModeEnum;
}
