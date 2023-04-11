import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An episode that defines a specific air date for an instance of a program.
 */
export declare class Episode extends SpeakeasyBase {
    /**
     * The date the air window opens for the episode.
     */
    beginAirDate: Date;
    /**
     * The date the live stream begins for the episode. Only set for live and LWSF episodes.
     */
    beginTransmissionDate?: Date;
    /**
     * The date the segment was created. Generated at creation.
     */
    createdDate?: Date;
    /**
     * The ID of the customer that owns this programs.
     */
    customerId?: number;
    /**
     * The date the air window closes for the episode.
     */
    endAirDate: Date;
    /**
     * The date the live stream ends for the episode. Only set for live and LWSF episodes.
     */
    endTransmissionDate?: Date;
    /**
     * The unique ID of the episode. Generated at creation.
     */
    id?: number;
    /**
     * The date the segment was last modified/updated. Automatically updated on any write operation.
     */
    lastModifiedDate?: Date;
    /**
     * The ID of the program that owns this episode.
     */
    programId: number;
    /**
     * The title of the program.
     */
    title: string;
}
