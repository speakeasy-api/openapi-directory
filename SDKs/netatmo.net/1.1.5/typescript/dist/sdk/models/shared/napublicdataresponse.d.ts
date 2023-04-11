import { SpeakeasyBase } from "../../../internal/utils";
import { NAPublicData } from "./napublicdata";
/**
 * Successful response
 */
export declare class NAPublicDataResponse extends SpeakeasyBase {
    body?: NAPublicData[];
    status?: string;
    timeExec?: number;
    timeServer?: number;
}
