import { SpeakeasyBase } from "../../../internal/utils";
import { AllocateInfo } from "./allocateinfo";
import { MetricValueSet } from "./metricvalueset";
import { QuotaError } from "./quotaerror";
/**
 * Response message for the AllocateQuota method.
 */
export declare class AllocateQuotaResponse extends SpeakeasyBase {
    /**
     * Indicates the decision of the allocate.
     */
    allocateErrors?: QuotaError[];
    allocateInfo?: AllocateInfo;
    /**
     * The same operation_id value used in the AllocateQuotaRequest. Used for logging and diagnostics purposes.
     */
    operationId?: string;
    /**
     * Quota metrics to indicate the result of allocation. Depending on the request, one or more of the following metrics will be included: 1. Per quota group or per quota metric incremental usage will be specified using the following delta metric : "serviceruntime.googleapis.com/api/consumer/quota_used_count" 2. The quota limit reached condition will be specified using the following boolean metric : "serviceruntime.googleapis.com/quota/exceeded"
     */
    quotaMetrics?: MetricValueSet[];
    /**
     * ID of the actual config used to process the request.
     */
    serviceConfigId?: string;
}
