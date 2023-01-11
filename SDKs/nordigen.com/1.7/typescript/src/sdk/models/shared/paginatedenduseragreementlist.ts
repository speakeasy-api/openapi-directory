import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndUserAgreement } from "./enduseragreement";



export class PaginatedEndUserAgreementList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: EndUserAgreement })
  results?: EndUserAgreement[];
}
