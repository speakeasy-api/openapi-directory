import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request message for CreateAsset.
 */
export declare class CreateAssetRequest extends SpeakeasyBase {
    /**
     * Required. The filename of the asset, including the file extension. The filename must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    filename?: string;
}
