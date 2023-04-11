import { SpeakeasyBase } from "../../../internal/utils";
import { V1Beta1QuotaOverride } from "./v1beta1quotaoverride";
/**
 * Import data embedded in the request message
 */
export declare class V1Beta1OverrideInlineSource extends SpeakeasyBase {
    /**
     * The overrides to create. Each override must have a value for 'metric' and 'unit', to specify which metric and which limit the override should be applied to. The 'name' field of the override does not need to be set; it is ignored.
     */
    overrides?: V1Beta1QuotaOverride[];
}
