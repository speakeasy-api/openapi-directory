import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceSpec } from "./devicespec";
/**
 * APK that is suitable for inclusion in a system image. The resource of SystemApksService.
 */
export declare class Variant extends SpeakeasyBase {
    /**
     * The device spec used to generate a system APK.
     */
    deviceSpec?: DeviceSpec;
    /**
     * Output only. The ID of a previously created system APK variant.
     */
    variantId?: number;
}
/**
 * APK that is suitable for inclusion in a system image. The resource of SystemApksService.
 */
export declare class VariantInput extends SpeakeasyBase {
    /**
     * The device spec used to generate a system APK.
     */
    deviceSpec?: DeviceSpec;
}
