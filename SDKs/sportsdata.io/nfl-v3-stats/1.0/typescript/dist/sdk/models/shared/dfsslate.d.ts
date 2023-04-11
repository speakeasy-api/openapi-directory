import { SpeakeasyBase } from "../../../internal/utils";
import { DfsSlateGame } from "./dfsslategame";
import { DfsSlatePlayer } from "./dfsslateplayer";
export declare class DfsSlate extends SpeakeasyBase {
    dfsSlateGames?: DfsSlateGame[];
    dfsSlatePlayers?: DfsSlatePlayer[];
    isMultiDaySlate?: boolean;
    numberOfGames?: number;
    operator?: string;
    operatorDay?: string;
    operatorGameType?: string;
    operatorName?: string;
    operatorSlateID?: number;
    operatorStartTime?: string;
    removedByOperator?: boolean;
    salaryCap?: number;
    slateID?: number;
    slateRosterSlots?: string[];
}
