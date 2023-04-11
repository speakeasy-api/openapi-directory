import { SpeakeasyBase } from "../../../internal/utils";
import { CardResume } from "./cardresume";
export declare class SetCardCount extends SpeakeasyBase {
    firstEd?: number;
    holo?: number;
    normal?: number;
    official: number;
    reverse?: number;
    total: number;
}
/**
 * Success
 */
export declare class Set extends SpeakeasyBase {
    cardCount: SetCardCount;
    cards: CardResume[];
    id: string;
    logo?: string;
    name: string;
    symbol?: string;
}
