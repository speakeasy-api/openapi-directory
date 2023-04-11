import { SpeakeasyBase } from "../../../internal/utils";
import { Game } from "./game";
import { Play } from "./play";
import { Quarter } from "./quarter";
export declare class PlayByPlay extends SpeakeasyBase {
    game?: Game;
    plays?: Play[];
    quarters?: Quarter[];
}
