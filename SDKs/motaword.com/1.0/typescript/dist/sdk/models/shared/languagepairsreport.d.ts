import { SpeakeasyBase } from "../../../internal/utils";
import { PagingMeta } from "./pagingmeta";
export declare class LanguagePairsReportReportLanguagePair extends SpeakeasyBase {
    sourceLanguage?: string;
    targetLanguage?: string;
}
export declare class LanguagePairsReportReport extends SpeakeasyBase {
    languagePair?: LanguagePairsReportReportLanguagePair;
    spending?: number;
    wordCount?: number;
}
export declare class LanguagePairsReport extends SpeakeasyBase {
    meta?: PagingMeta;
    report?: LanguagePairsReportReport[];
}
