import { SpeakeasyBase } from "../../../internal/utils";
import { Bands } from "./bands";
import { Instruments } from "./instruments";
import { Preview } from "./preview";
/**
 * Information about a descriptor
**/
export declare class Descriptors extends SpeakeasyBase {
    averageRenderSpeed?: number;
    bands?: Bands[];
    id?: string;
    instruments?: Instruments[];
    maxTempo?: number;
    minTempo?: number;
    name?: string;
    previews?: Preview[];
    tags?: string[];
}
