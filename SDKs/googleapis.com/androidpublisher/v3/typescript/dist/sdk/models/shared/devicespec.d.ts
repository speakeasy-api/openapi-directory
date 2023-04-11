import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The device spec used to generate a system APK.
 */
export declare class DeviceSpec extends SpeakeasyBase {
    /**
     * Screen dpi.
     */
    screenDensity?: number;
    /**
     * Supported ABI architectures in the order of preference. The values should be the string as reported by the platform, e.g. "armeabi-v7a", "x86_64".
     */
    supportedAbis?: string[];
    /**
     * All installed locales represented as BCP-47 strings, e.g. "en-US".
     */
    supportedLocales?: string[];
}
