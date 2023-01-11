import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";



export class GeocodeAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=found" })
  found: number;

  @SpeakeasyMetadata({ data: "json, name=locations", elemType: Location })
  locations: Location[];
}
