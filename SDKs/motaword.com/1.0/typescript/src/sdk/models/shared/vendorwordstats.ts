import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VendorWordStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approved" })
  approved?: number;

  @SpeakeasyMetadata({ data: "json, name=translated" })
  translated?: number;
}
