import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Requisition } from "./requisition";



export class PaginatedRequisitionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: Requisition })
  results?: Requisition[];
}
