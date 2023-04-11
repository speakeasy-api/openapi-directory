import { SpeakeasyBase } from "../../../internal/utils";
import { SetResume } from "./setresume";
import { WeakRes } from "./weakres";
export declare class CardAbilities extends SpeakeasyBase {
    effect?: string;
    name?: string;
    type?: string;
}
export declare class CardAttacks extends SpeakeasyBase {
    cost?: string[];
    damage?: number;
    effect?: string;
    name: string;
}
export declare class CardItem extends SpeakeasyBase {
    effect: string;
    name: string;
}
export declare class CardLegal extends SpeakeasyBase {
    expanded?: boolean;
    standard?: boolean;
}
export declare class CardVariants extends SpeakeasyBase {
    firstEdition: boolean;
    holo: boolean;
    normal: boolean;
    reverse: boolean;
    wPromo: boolean;
}
/**
 * successful operation
 */
export declare class Card extends SpeakeasyBase {
    abilities?: CardAbilities[];
    attacks?: CardAttacks[];
    category: string;
    description?: string;
    dexId?: number[];
    energyType?: string;
    evolveFrom?: string;
    hp?: number;
    id: string;
    illustrator?: string;
    image?: string;
    item?: CardItem;
    legal: CardLegal;
    level?: number;
    localId: string;
    name: string;
    rarity: string;
    regulationMark?: string;
    resistances?: WeakRes[][];
    retreat?: number;
    set: SetResume;
    stage?: string;
    suffix?: string;
    trainerType?: string;
    types?: string[];
    variants?: CardVariants;
    weaknesses?: WeakRes[][];
}
