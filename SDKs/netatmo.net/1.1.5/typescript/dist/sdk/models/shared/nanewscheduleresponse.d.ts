import { SpeakeasyBase } from "../../../internal/utils";
import { NANewScheduleBody } from "./nanewschedulebody";
/**
 * Successful response
 */
export declare class NANewScheduleResponse extends SpeakeasyBase {
    body?: NANewScheduleBody;
    status?: string;
    timeExec?: number;
    timeServer?: number;
}
