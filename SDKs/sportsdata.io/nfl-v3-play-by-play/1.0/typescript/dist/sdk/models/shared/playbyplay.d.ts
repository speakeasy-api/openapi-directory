import { SpeakeasyBase } from "../../../internal/utils";
import { Play } from "./play";
import { Quarter } from "./quarter";
import { Score } from "./score";
export declare class PlayByPlay extends SpeakeasyBase {
    plays?: Play[];
    quarters?: Quarter[];
    score?: Score;
}
