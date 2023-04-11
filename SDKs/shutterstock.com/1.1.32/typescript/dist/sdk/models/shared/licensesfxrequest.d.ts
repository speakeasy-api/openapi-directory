import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseSFX } from "./licensesfx";
/**
 * License sounds effect asset request body
 */
export declare class LicenseSFXRequest extends SpeakeasyBase {
    /**
     * Sound effects to license for
     */
    soundEffects: LicenseSFX[];
}
