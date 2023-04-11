import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicyPolicy } from "./returnpolicypolicy";
export declare class ReturnPolicySeasonalOverride extends SpeakeasyBase {
    /**
     * Required. Last day on which the override applies. In ISO 8601 format.
     */
    endDate?: string;
    /**
     * Required. The name of the seasonal override as shown in Merchant Center.
     */
    name?: string;
    policy?: ReturnPolicyPolicy;
    /**
     * Required. First day on which the override applies. In ISO 8601 format.
     */
    startDate?: string;
}
