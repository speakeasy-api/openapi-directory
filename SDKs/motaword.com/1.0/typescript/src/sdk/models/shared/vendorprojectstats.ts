import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VendorProjectStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invited" })
  invited?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=worked" })
  worked?: number;
}
