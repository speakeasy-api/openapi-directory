import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Info about the sources of this asset (i.e. assets that were remixed to create this asset).
 */
export declare class RemixInfo extends SpeakeasyBase {
    /**
     * Resource ids for the sources of this remix, of the form: `assets/{ASSET_ID}`
     */
    sourceAsset?: string[];
}
