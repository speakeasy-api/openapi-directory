import { SpeakeasyBase } from "../../../internal/utils";
import { LandlordChaseNoteModel } from "./landlordchasenotemodel";
import { LandlordRentOustandingItem } from "./landlordrentoustandingitem";
/**
 * Landlord Rent Arrears.
 */
export declare class LandlordRentArrearsModel extends SpeakeasyBase {
    /**
     * Chase Notes
     */
    chaseNotes?: LandlordChaseNoteModel[];
    /**
     * Rent Collected
     */
    rentCollected?: number;
    /**
     * Outstanding Rent
     */
    rentOutstanding?: LandlordRentOustandingItem[];
    /**
     * Rent Arrears
     */
    totalRentArrears?: number;
}
