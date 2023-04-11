import { SpeakeasyBase } from "../../../internal/utils";
import { NAStationDataBody } from "./nastationdatabody";
/**
 * Successful response
 */
export declare class NAStationDataResponse extends SpeakeasyBase {
    body?: NAStationDataBody;
    status?: string;
    timeExec?: number;
    timeServer?: number;
}
