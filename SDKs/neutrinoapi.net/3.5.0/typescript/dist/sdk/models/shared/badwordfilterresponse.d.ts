import { SpeakeasyBase } from "../../../internal/utils";
export declare class BadWordFilterResponse extends SpeakeasyBase {
    badWordsList: string[];
    badWordsTotal: number;
    censoredContent: string;
    isBad: boolean;
}
