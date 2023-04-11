import { SpeakeasyBase } from "../../../internal/utils";
import { NAThermStateBody } from "./nathermstatebody";
/**
 * Successful response
 */
export declare class NAThermStateResponse extends SpeakeasyBase {
    body?: NAThermStateBody;
    status?: string;
    timeExec?: number;
    timeServer?: number;
}
