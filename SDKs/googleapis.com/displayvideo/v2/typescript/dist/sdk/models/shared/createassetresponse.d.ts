import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
/**
 * A response message for CreateAsset.
 */
export declare class CreateAssetResponse extends SpeakeasyBase {
    /**
     * A single asset.
     */
    asset?: Asset;
}
