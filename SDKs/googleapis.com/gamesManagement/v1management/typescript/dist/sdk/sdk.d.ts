import { AxiosInstance } from "axios";
import { Achievements } from "./achievements";
import { Applications } from "./applications";
import { Events } from "./events";
import { Players } from "./players";
import { Scores } from "./scores";
export declare const ServerList: readonly ["https://gamesmanagement.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    achievements: Achievements;
    applications: Applications;
    events: Events;
    players: Players;
    scores: Scores;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
