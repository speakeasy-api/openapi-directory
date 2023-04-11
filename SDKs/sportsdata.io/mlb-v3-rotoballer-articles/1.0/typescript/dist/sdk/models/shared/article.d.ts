import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerInfo } from "./playerinfo";
export declare class Article extends SpeakeasyBase {
    articleID?: number;
    author?: string;
    content?: string;
    players?: PlayerInfo[];
    source?: string;
    termsOfUse?: string;
    title?: string;
    updated?: string;
    url?: string;
}
