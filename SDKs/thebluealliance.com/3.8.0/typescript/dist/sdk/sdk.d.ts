import { AxiosInstance } from "axios";
import { Tba } from "./tba";
import { District } from "./district";
import { Event } from "./event";
import { List } from "./list";
import { Match } from "./match";
import { Team } from "./team";
export declare const ServerList: readonly ["https://www.thebluealliance.com/api/v3"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    tba: Tba;
    district: District;
    event: Event;
    list: List;
    match: Match;
    team: Team;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
