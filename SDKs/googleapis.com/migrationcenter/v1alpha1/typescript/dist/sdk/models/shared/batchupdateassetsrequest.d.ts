import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateAssetRequestInput } from "./updateassetrequest";
/**
 * A request to update a list of assets.
 */
export declare class BatchUpdateAssetsRequestInput extends SpeakeasyBase {
    /**
     * Required. The request message specifying the resources to update. A maximum of 1000 assets can be modified in a batch.
     */
    requests?: UpdateAssetRequestInput[];
}
