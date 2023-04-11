import { SpeakeasyBase } from "../../../internal/utils";
export declare class CadenceCounts extends SpeakeasyBase {
    /**
     * The number of people that have ever been added to the cadence
     */
    cadencePeople?: number;
    /**
     * The number of meetings booked and attributed to the cadence
     */
    meetingsBooked?: number;
    /**
     * The number of opportunities created and attributed to the cadence
     */
    opportunitiesCreated?: number;
    /**
     * The number of people that have been skipped, scheduled, or advanced in a cadence
     */
    peopleActedOnCount?: number;
    /**
     * The user defined target for number of people to add to the cadence each day
     */
    targetDailyPeople?: number;
}
