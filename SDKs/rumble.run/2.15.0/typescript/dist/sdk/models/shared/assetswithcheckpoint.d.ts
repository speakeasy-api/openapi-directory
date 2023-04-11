import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
/**
 * filtered asset results with a checkpoint wrapper
 */
export declare class AssetsWithCheckpoint extends SpeakeasyBase {
    assets: Asset[];
    since: number;
}
