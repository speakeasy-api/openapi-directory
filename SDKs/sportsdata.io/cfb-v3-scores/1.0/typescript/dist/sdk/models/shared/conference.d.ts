import { SpeakeasyBase } from "../../../internal/utils";
import { Team } from "./team";
export declare class Conference extends SpeakeasyBase {
    conferenceID?: number;
    conferenceName?: string;
    divisionName?: string;
    name?: string;
    teams?: Team[];
}
