import { SpeakeasyBase } from "../../../internal/utils";
export declare class CampaignRequestFilters extends SpeakeasyBase {
    attributes?: string[];
    contacts?: string[];
    tags?: string[];
}
/**
 * Campaign type specifies how it sources contacts and what event triggers its execution  Sort order
 *
 * @remarks
 *   * `M` - Manual
 *   * `S` - Scheduled
 *   * `FU` - File Upload
 *
 */
export declare enum CampaignRequestTriggerCodeEnum {
    M = "M",
    S = "S",
    Fu = "FU"
}
export declare class CampaignRequestTrigger extends SpeakeasyBase {
    /**
     * Campaign type specifies how it sources contacts and what event triggers its execution  Sort order
     *
     * @remarks
     *   * `M` - Manual
     *   * `S` - Scheduled
     *   * `FU` - File Upload
     *
     */
    code?: CampaignRequestTriggerCodeEnum;
}
export declare class CampaignRequest extends SpeakeasyBase {
    filters?: CampaignRequestFilters;
    template?: string;
    trigger?: CampaignRequestTrigger;
}
