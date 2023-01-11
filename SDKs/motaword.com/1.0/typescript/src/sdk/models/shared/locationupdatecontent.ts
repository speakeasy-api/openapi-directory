import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LocationUpdateContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat: number;

  @SpeakeasyMetadata({ data: "json, name=lon" })
  lon: number;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: number;
}
