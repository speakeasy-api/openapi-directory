import { SpeakeasyBase } from "../../../internal/utils";
import { Season } from "./season";
export declare class Competition extends SpeakeasyBase {
    areaId?: number;
    areaName?: string;
    competitionId?: number;
    format?: string;
    gender?: string;
    name?: string;
    playerStatsCoverage?: boolean;
    seasons?: Season[];
    type?: string;
}
