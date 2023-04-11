import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualTariff } from "./virtualtariff";
/**
 * OK
 */
export declare class VirtualTariffsOfFolder extends SpeakeasyBase {
    /**
     * The DateTime (UTC) of this virtual tarfifs
     */
    date?: Date;
    folderId?: string;
    /**
     * The name of this folder
     */
    name?: string;
    virtualTariffs?: VirtualTariff[];
}
