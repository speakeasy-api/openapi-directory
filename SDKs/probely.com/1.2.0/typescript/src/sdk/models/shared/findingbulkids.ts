import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FindingBulkIds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: string[];
}
