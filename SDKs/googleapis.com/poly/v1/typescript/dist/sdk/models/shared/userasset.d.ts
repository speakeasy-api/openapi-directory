import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
/**
 * Data about the user's asset.
 */
export declare class UserAsset extends SpeakeasyBase {
    /**
     * Represents and describes an asset in the Poly library. An asset is a 3D model or scene created using [Tilt Brush](//www.tiltbrush.com), [Blocks](//vr.google.com/blocks/), or any 3D program that produces a file that can be upload to Poly.
     */
    asset?: Asset;
}
