import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileNeedsVendor } from "./fileneedsvendor";



export class VendorWithNeeds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matchedNeeds", elemType: FileNeedsVendor })
  matchedNeeds?: FileNeedsVendor[];

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: number;
}
