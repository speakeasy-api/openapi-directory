import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VendorWithNeeds } from "./vendorwithneeds";



export class VendorInvitationList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=vendors", elemType: VendorWithNeeds })
  vendors?: VendorWithNeeds[];
}
