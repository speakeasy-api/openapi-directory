import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetResumeCardCount extends SpeakeasyBase {
    official: number;
    total: number;
}
export declare class SetResume extends SpeakeasyBase {
    cardCount: SetResumeCardCount;
    id: string;
    logo?: string;
    name: string;
    symbol?: string;
}
