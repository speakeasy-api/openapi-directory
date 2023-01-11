import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PagingMeta } from "./pagingmeta";



export class LanguagePairsReportReportLanguagePair extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source_language" })
  sourceLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=target_language" })
  targetLanguage?: string;
}


export class LanguagePairsReportReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=language_pair" })
  languagePair?: LanguagePairsReportReportLanguagePair;

  @SpeakeasyMetadata({ data: "json, name=spending" })
  spending?: number;

  @SpeakeasyMetadata({ data: "json, name=word_count" })
  wordCount?: number;
}


export class LanguagePairsReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: PagingMeta;

  @SpeakeasyMetadata({ data: "json, name=report", elemType: LanguagePairsReportReport })
  report?: LanguagePairsReportReport[];
}
