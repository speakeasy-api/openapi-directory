import { SpeakeasyBase } from "../../../internal/utils";
import { TemporalAsset } from "./temporalasset";
/**
 * Batch get assets history response.
 */
export declare class BatchGetAssetsHistoryResponse extends SpeakeasyBase {
    /**
     * A list of assets with valid time windows.
     */
    assets?: TemporalAsset[];
}
