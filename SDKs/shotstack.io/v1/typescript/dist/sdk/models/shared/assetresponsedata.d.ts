import { SpeakeasyBase } from "../../../internal/utils";
import { AssetResponseAttributes } from "./assetresponseattributes";
/**
 * The type of resource (an asset) and attributes of the asset.
 */
export declare class AssetResponseData extends SpeakeasyBase {
    /**
     * The list of asset attributes and their values.
     */
    attributes?: AssetResponseAttributes;
    /**
     * The type of resource, in this case it is an assets.
     */
    type?: string;
}
