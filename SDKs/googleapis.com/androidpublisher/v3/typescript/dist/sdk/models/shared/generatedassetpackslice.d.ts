import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Download metadata for an asset pack slice.
 */
export declare class GeneratedAssetPackSlice extends SpeakeasyBase {
    /**
     * Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method.
     */
    downloadId?: string;
    /**
     * Name of the module that this asset slice belongs to.
     */
    moduleName?: string;
    /**
     * Asset slice ID.
     */
    sliceId?: string;
    /**
     * Asset module version.
     */
    version?: string;
}
