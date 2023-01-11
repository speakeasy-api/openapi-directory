import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReportFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=budget_code" })
  budgetCode?: string;

  @SpeakeasyMetadata({ data: "json, name=date_from" })
  dateFrom?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_to" })
  dateTo?: Date;

  @SpeakeasyMetadata({ data: "json, name=source_languages" })
  sourceLanguages?: string[];

  @SpeakeasyMetadata({ data: "json, name=target_languages" })
  targetLanguages?: string[];

  @SpeakeasyMetadata({ data: "json, name=users" })
  users?: number[];
}
