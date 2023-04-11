import { SpeakeasyBase } from "../../../internal/utils";
import { Diagnostic } from "./diagnostic";
export declare class PollingOptions extends SpeakeasyBase {
    /**
     * An array of diagnostics to be collected by Deployment Manager, these diagnostics will be displayed to the user.
     */
    diagnostics?: Diagnostic[];
    /**
     * JsonPath expression that determines if the request failed.
     */
    failCondition?: string;
    /**
     * JsonPath expression that determines if the request is completed.
     */
    finishCondition?: string;
    /**
     * JsonPath expression that evaluates to string, it indicates where to poll.
     */
    pollingLink?: string;
    /**
     * JsonPath expression, after polling is completed, indicates where to fetch the resource.
     */
    targetLink?: string;
}
