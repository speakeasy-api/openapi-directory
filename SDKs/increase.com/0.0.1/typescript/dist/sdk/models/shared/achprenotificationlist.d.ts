import { SpeakeasyBase } from "../../../internal/utils";
import { AchPrenotification } from "./achprenotification";
/**
 * A list of ACH Prenotification objects
 */
export declare class AchPrenotificationList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: AchPrenotification[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
