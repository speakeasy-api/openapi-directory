import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
/**
 * Response for updating a list of assets.
 */
export declare class BatchUpdateAssetsResponse extends SpeakeasyBase {
    /**
     * Update asset content. The content only includes values after field mask being applied.
     */
    assets?: Asset[];
}
