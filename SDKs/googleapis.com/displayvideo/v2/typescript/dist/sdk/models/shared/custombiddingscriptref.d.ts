import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The reference to the uploaded custom bidding script file.
 */
export declare class CustomBiddingScriptRef extends SpeakeasyBase {
    /**
     * A resource name to be used in media.download to Download the script files. Or media.upload to Upload the script files. Resource names have the format `customBiddingAlgorithms/{custom_bidding_algorithm_id}/scriptRef/{ref_id}`.
     */
    resourceName?: string;
}
