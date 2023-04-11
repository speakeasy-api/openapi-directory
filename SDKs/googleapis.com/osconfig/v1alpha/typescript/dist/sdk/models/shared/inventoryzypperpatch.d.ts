import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details related to a Zypper Patch.
 */
export declare class InventoryZypperPatch extends SpeakeasyBase {
    /**
     * The category of the patch.
     */
    category?: string;
    /**
     * The name of the patch.
     */
    patchName?: string;
    /**
     * The severity specified for this patch
     */
    severity?: string;
    /**
     * Any summary information provided about this patch.
     */
    summary?: string;
}
