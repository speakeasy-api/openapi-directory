import { AxiosInstance } from "axios";
import { AchievementDefinitions } from "./achievementdefinitions";
import { Achievements } from "./achievements";
import { Applications } from "./applications";
import { Events } from "./events";
import { Leaderboards } from "./leaderboards";
import { Metagame } from "./metagame";
import { Players } from "./players";
import { Revisions } from "./revisions";
import { Scores } from "./scores";
import { Snapshots } from "./snapshots";
import { Stats } from "./stats";
export declare const ServerList: readonly ["https://games.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    achievementDefinitions: AchievementDefinitions;
    achievements: Achievements;
    applications: Applications;
    events: Events;
    leaderboards: Leaderboards;
    metagame: Metagame;
    players: Players;
    revisions: Revisions;
    scores: Scores;
    snapshots: Snapshots;
    stats: Stats;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
