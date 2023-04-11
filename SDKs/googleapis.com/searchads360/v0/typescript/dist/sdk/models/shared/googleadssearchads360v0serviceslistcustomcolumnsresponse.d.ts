import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAdsSearchads360V0ResourcesCustomColumn } from "./googleadssearchads360v0resourcescustomcolumn";
/**
 * Response message for fetching all custom columns associated with a customer.
 */
export declare class GoogleAdsSearchads360V0ServicesListCustomColumnsResponse extends SpeakeasyBase {
    /**
     * The CustomColumns owned by the provided customer.
     */
    customColumns?: GoogleAdsSearchads360V0ResourcesCustomColumn[];
}
