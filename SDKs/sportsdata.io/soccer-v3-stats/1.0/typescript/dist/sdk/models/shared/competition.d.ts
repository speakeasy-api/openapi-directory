import { SpeakeasyBase } from "../../../internal/utils";
import { Season } from "./season";
export declare class Competition extends SpeakeasyBase {
    areaId?: number;
    areaName?: string;
    competitionId?: number;
    format?: string;
    gender?: string;
    key?: string;
    name?: string;
    seasons?: Season[];
    type?: string;
}
