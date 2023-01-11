import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LanguageStringStat } from "./languagestringstat";



export class ClientStringStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=language_counts", elemType: LanguageStringStat })
  languageCounts?: LanguageStringStat[];

  @SpeakeasyMetadata({ data: "json, name=total_project_strings_count" })
  totalProjectStringsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=total_tm_strings_count" })
  totalTmStringsCount?: number;
}
