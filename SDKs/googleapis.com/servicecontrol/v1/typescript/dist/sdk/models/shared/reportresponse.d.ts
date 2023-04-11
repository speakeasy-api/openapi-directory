import { SpeakeasyBase } from "../../../internal/utils";
import { ReportError } from "./reporterror";
/**
 * Response message for the Report method.
 */
export declare class ReportResponse extends SpeakeasyBase {
    /**
     * Partial failures, one for each `Operation` in the request that failed processing. There are three possible combinations of the RPC status: 1. The combination of a successful RPC status and an empty `report_errors` list indicates a complete success where all `Operations` in the request are processed successfully. 2. The combination of a successful RPC status and a non-empty `report_errors` list indicates a partial success where some `Operations` in the request succeeded. Each `Operation` that failed processing has a corresponding item in this list. 3. A failed RPC status indicates a general non-deterministic failure. When this happens, it's impossible to know which of the 'Operations' in the request succeeded or failed.
     */
    reportErrors?: ReportError[];
    /**
     * The actual config id used to process the request.
     */
    serviceConfigId?: string;
    /**
     * The current service rollout id used to process the request.
     */
    serviceRolloutId?: string;
}
