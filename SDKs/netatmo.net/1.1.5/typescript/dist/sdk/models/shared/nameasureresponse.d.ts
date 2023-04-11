import { SpeakeasyBase } from "../../../internal/utils";
import { NAMeasureBodyElem } from "./nameasurebodyelem";
/**
 * Successful response
 */
export declare class NAMeasureResponse extends SpeakeasyBase {
    body?: NAMeasureBodyElem[];
    status?: string;
    timeExec?: number;
    timeServer?: number;
}
