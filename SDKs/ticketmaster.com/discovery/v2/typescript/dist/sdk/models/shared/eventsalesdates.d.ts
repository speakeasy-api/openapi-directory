import { SpeakeasyBase } from "../../../internal/utils";
import { Presale } from "./presale";
import { PublicSaleDates } from "./publicsaledates";
/**
 * Event's Sales Dates
 */
export declare class EventSalesDates extends SpeakeasyBase {
    /**
     * Presale information on this event
     */
    presales?: Presale[];
    /**
     * Event's Public Onsales Dates
     */
    public?: PublicSaleDates;
}
