import { SpeakeasyBase } from "../../../internal/utils";
import { DfsSlatePlayer } from "./dfsslateplayer";
import { DfsSlateTournament } from "./dfsslatetournament";
export declare class DfsSlate extends SpeakeasyBase {
    dfsSlatePlayers?: DfsSlatePlayer[];
    dfsSlateTournaments?: DfsSlateTournament[];
    isMultiDaySlate?: boolean;
    numberOfTournaments?: number;
    operator?: string;
    operatorDay?: string;
    operatorGameType?: string;
    operatorName?: string;
    operatorSlateID?: number;
    operatorStartTime?: string;
    removedByOperator?: boolean;
    slateID?: number;
    slateRosterSlots?: string[];
}
