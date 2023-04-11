import { SpeakeasyBase } from "../../../internal/utils";
import { V1Beta1QuotaOverride } from "./v1beta1quotaoverride";
/**
 * Response message for ListProducerOverrides.
 */
export declare class V1Beta1ListProducerOverridesResponse extends SpeakeasyBase {
    /**
     * Token identifying which result to start with; returned by a previous list call.
     */
    nextPageToken?: string;
    /**
     * Producer overrides on this limit.
     */
    overrides?: V1Beta1QuotaOverride[];
}
