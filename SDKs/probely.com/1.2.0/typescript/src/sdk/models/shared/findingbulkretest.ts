import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScanProfileEnum } from "./scanprofileenum";



export class FindingBulkRetest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: string[];

  @SpeakeasyMetadata({ data: "json, name=scan_profile" })
  scanProfile?: ScanProfileEnum;
}
