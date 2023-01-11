import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VendorEarningStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
