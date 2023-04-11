import { SpeakeasyBase } from "../../../internal/utils";
import { Stadium } from "./stadium";
export declare class Team extends SpeakeasyBase {
    active?: boolean;
    apRank?: number;
    conference?: string;
    conferenceID?: number;
    conferenceLosses?: number;
    conferenceWins?: number;
    globalTeamID?: number;
    key?: string;
    losses?: number;
    name?: string;
    school?: string;
    shortDisplayName?: string;
    stadium?: Stadium;
    teamID?: number;
    teamLogoUrl?: string;
    wins?: number;
}
