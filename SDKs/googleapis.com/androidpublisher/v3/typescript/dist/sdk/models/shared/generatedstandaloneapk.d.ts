import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Download metadata for a standalone APK.
 */
export declare class GeneratedStandaloneApk extends SpeakeasyBase {
    /**
     * Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method.
     */
    downloadId?: string;
    /**
     * ID of the generated variant.
     */
    variantId?: number;
}
