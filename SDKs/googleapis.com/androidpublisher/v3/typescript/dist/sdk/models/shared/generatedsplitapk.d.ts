import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Download metadata for a split APK.
 */
export declare class GeneratedSplitApk extends SpeakeasyBase {
    /**
     * Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method.
     */
    downloadId?: string;
    /**
     * Name of the module that this APK belongs to.
     */
    moduleName?: string;
    /**
     * Split ID. Empty for the main split of the base module.
     */
    splitId?: string;
    /**
     * ID of the generated variant.
     */
    variantId?: number;
}
