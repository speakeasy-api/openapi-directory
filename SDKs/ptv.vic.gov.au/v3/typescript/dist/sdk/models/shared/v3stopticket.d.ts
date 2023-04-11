import { SpeakeasyBase } from "../../../internal/utils";
export declare class V3StopTicket extends SpeakeasyBase {
    /**
     * Indicates whether the stop is inside the free fare zone
     */
    isFreeFareZone?: boolean;
    ticketChecks?: boolean;
    ticketMachine?: boolean;
    /**
     * Indicates the ticket type for the stop (myki, paper or both)
     */
    ticketType?: string;
    ticketZones?: number[];
    vlineReservation?: boolean;
    /**
     * Description of the zone
     */
    zone?: string;
}
