import { SpeakeasyBase } from "../../../internal/utils";
import { AdStyle } from "./adstyle";
/**
 * Successful response
 */
export declare class SavedAdStyle extends SpeakeasyBase {
    adStyle?: AdStyle;
    /**
     * Unique identifier of this saved ad style. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
     */
    id?: string;
    /**
     * Kind of resource this is, in this case adsense#savedAdStyle.
     */
    kind?: string;
    /**
     * The user selected name of this SavedAdStyle.
     */
    name?: string;
}
