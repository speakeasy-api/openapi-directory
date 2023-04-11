import { SpeakeasyBase } from "../../../internal/utils";
import { Game } from "./game";
export declare class DfsSlateGame extends SpeakeasyBase {
    game?: Game;
    gameID?: number;
    operatorGameID?: number;
    removedByOperator?: boolean;
    slateGameID?: number;
    slateID?: number;
}
