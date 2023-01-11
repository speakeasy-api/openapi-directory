import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Monetary } from "./monetary";



export class ClientStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document_count" })
  documentCount?: number;

  @SpeakeasyMetadata({ data: "json, name=nps" })
  nps?: number;

  @SpeakeasyMetadata({ data: "json, name=started_project_count" })
  startedProjectCount?: number;

  @SpeakeasyMetadata({ data: "json, name=total_discounted" })
  totalDiscounted?: Monetary;

  @SpeakeasyMetadata({ data: "json, name=total_project_count" })
  totalProjectCount?: number;

  @SpeakeasyMetadata({ data: "json, name=total_spending" })
  totalSpending?: number;

  @SpeakeasyMetadata({ data: "json, name=translator_count" })
  translatorCount?: number;
}
