import { SpeakeasyBase } from "../../../internal/utils";
import { Report } from "./report";
import { ResourceQuotasRemaining } from "./resourcequotasremaining";
/**
 * The main response class which holds the reports from the Reporting API `batchGet` call.
 */
export declare class GetReportsResponse extends SpeakeasyBase {
    /**
     * The amount of resource quota tokens deducted to execute the query. Includes all responses.
     */
    queryCost?: number;
    /**
     * Responses corresponding to each of the request.
     */
    reports?: Report[];
    /**
     * The resource quota tokens remaining for the property after the request is completed.
     */
    resourceQuotasRemaining?: ResourceQuotasRemaining;
}
