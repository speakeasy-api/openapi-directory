import { SpeakeasyBase } from "../../../internal/utils";
import { GeneratedApksPerSigningKey } from "./generatedapkspersigningkey";
/**
 * Response to list generated APKs.
 */
export declare class GeneratedApksListResponse extends SpeakeasyBase {
    /**
     * All generated APKs, grouped by the APK signing key.
     */
    generatedApks?: GeneratedApksPerSigningKey[];
}
