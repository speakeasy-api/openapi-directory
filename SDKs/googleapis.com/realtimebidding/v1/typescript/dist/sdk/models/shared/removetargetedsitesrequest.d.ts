import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to stop targeting sites in a specific pretargeting configuration. The pretargeting configuration itself specifies how these sites are targeted in PretargetingConfig.webTargeting.
 */
export declare class RemoveTargetedSitesRequest extends SpeakeasyBase {
    /**
     * A list of site URLs to stop targeting in the pretargeting configuration. These values will be removed from the list of targeted URLs in PretargetingConfig.webTargeting.values.
     */
    sites?: string[];
}
