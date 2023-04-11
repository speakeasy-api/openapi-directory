import { SpeakeasyBase } from "../../../internal/utils";
import { Bands } from "./bands";
import { Instruments } from "./instruments";
import { Preview } from "./preview";
/**
 * Information about a descriptor
 */
export declare class Descriptors extends SpeakeasyBase {
    /**
     * The average ratio of the length of the music to the time it takes to render; for example, a render speed of 3.0 generates 30 seconds of music in about 10 seconds
     */
    averageRenderSpeed?: number;
    /**
     * The bands that are available to use this descriptor
     */
    bands?: Bands[];
    /**
     * The ID of the descriptor
     */
    id?: string;
    /**
     * The instruments that can play with this descriptor
     */
    instruments?: Instruments[];
    /**
     * The maximum beats per minute that the descriptor is intended to be used with
     */
    maxTempo?: number;
    /**
     * The minimum beats per minute that the descriptor is intended to be used with
     */
    minTempo?: number;
    /**
     * The name of the descriptor
     */
    name?: string;
    /**
     * Preview of the descriptor
     */
    previews?: Preview[];
    /**
     * Tags that describe the descriptor
     */
    tags?: string[];
}
