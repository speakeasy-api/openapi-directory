import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatedAt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=to" })
  to?: string;
}
