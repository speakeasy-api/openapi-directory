import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A spot insertion for playing a series of spots when a cue is received during a program.
 */
export declare class SpotInsertionInput extends SpeakeasyBase {
    /**
     * The ID of the broadcast service for the spot insertion.
     */
    broadcastServiceId: number;
    /**
     * The cue that triggers the spot insertion.
     */
    cue: string;
    /**
     * The duration of the spot insertion.
     */
    duration: number;
    /**
     * The date the spot insertion ends. The time will be set to midnight Eastern Time.
     */
    endDate: Date;
    /**
     * The ID of the program for the spot insertion.
     */
    programId: number;
    /**
     * The ordered list of spot IDs to play.
     */
    spots: number[];
    /**
     * The date the spot insertion can start. The time will be set to midnight Eastern Time.
     */
    startDate: Date;
}
/**
 * A spot insertion for playing a series of spots when a cue is received during a program.
 */
export declare class SpotInsertion extends SpeakeasyBase {
    /**
     * The ID of the broadcast service for the spot insertion.
     */
    broadcastServiceId: number;
    /**
     * The date and time the spot insertion was created. Generated at creation.
     */
    createdDate?: Date;
    /**
     * The cue that triggers the spot insertion.
     */
    cue: string;
    /**
     * The ID of the customer who owns the spot insertion. Set to the logged-in customer at creation.
     */
    customerId?: number;
    /**
     * The duration of the spot insertion.
     */
    duration: number;
    /**
     * The date the spot insertion ends. The time will be set to midnight Eastern Time.
     */
    endDate: Date;
    /**
     * The unique ID of the spot insertion. Generated at creation.
     */
    id?: number;
    /**
     * The ID of the program for the spot insertion.
     */
    programId: number;
    /**
     * The ordered list of spot IDs to play.
     */
    spots: number[];
    /**
     * The date the spot insertion can start. The time will be set to midnight Eastern Time.
     */
    startDate: Date;
}
