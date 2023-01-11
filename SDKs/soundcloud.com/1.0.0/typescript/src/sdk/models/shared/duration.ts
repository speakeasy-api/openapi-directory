import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Duration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=from" })
  from?: number;

  @SpeakeasyMetadata({ data: "queryParam, name=to" })
  to?: number;
}
