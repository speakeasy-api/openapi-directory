import { SpeakeasyBase } from "../../../internal/utils";
import { DepthChart } from "./depthchart";
export declare class TeamDepthChart extends SpeakeasyBase {
    defense?: DepthChart[];
    offense?: DepthChart[];
    specialTeams?: DepthChart[];
    teamID?: number;
}
