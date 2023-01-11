import { SpeakeasyBase } from "../../../internal/utils";
import { Word } from "./word";
/**
 * An object representing a recognized text line.
**/
export declare class Line extends SpeakeasyBase {
    boundingBox?: number[];
    text?: string;
    words?: Word[];
}
