import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointInfo } from "./endpointinfo";
import { Step } from "./step";
/**
 * Trace represents one simulated packet forwarding path. * Each trace contains multiple ordered steps. * Each step is in a particular state with associated configuration. * State is categorized as final or non-final states. * Each final state has a reason associated. * Each trace must end with a final state (the last step). ``` |---------------------Trace----------------------| Step1(State) Step2(State) --- StepN(State(final)) ```
 */
export declare class Trace extends SpeakeasyBase {
    /**
     * For display only. The specification of the endpoints for the test. EndpointInfo is derived from source and destination Endpoint and validated by the backend data plane model.
     */
    endpointInfo?: EndpointInfo;
    /**
     * A trace of a test contains multiple steps from the initial state to the final state (delivered, dropped, forwarded, or aborted). The steps are ordered by the processing sequence within the simulated network state machine. It is critical to preserve the order of the steps and avoid reordering or sorting them.
     */
    steps?: Step[];
}
