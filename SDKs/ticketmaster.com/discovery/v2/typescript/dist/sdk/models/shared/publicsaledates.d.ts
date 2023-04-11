import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Event's Public Onsales Dates
 */
export declare class PublicSaleDates extends SpeakeasyBase {
    /**
     * Public sale's end dates. The date and time when the public sale will end
     */
    endDateTime?: Date;
    /**
     * Public sale's start dates. The date and time when the public sale will start
     */
    startDateTime?: Date;
    /**
     * True if the public sale's date is to be determined
     */
    startTBD?: boolean;
}
