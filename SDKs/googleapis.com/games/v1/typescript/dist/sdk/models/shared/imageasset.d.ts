import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An image asset object.
 */
export declare class ImageAsset extends SpeakeasyBase {
    /**
     * The height of the asset.
     */
    height?: number;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#imageAsset`.
     */
    kind?: string;
    /**
     * The name of the asset.
     */
    name?: string;
    /**
     * The URL of the asset.
     */
    url?: string;
    /**
     * The width of the asset.
     */
    width?: number;
}
