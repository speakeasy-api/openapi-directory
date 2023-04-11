import { SpeakeasyBase } from "../../../internal/utils";
import { Schedule } from "./schedule";
export declare class DfsSlateGame extends SpeakeasyBase {
    game?: Schedule;
    gameID?: number;
    operatorGameID?: number;
    removedByOperator?: boolean;
    scoreID?: number;
    slateGameID?: number;
    slateID?: number;
}
