import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Timezone } from "./timezone";



export class Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address: string;

  @SpeakeasyMetadata({ data: "json, name=addressComponents" })
  addressComponents: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode3" })
  countryCode3: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude: number;

  @SpeakeasyMetadata({ data: "json, name=locationTags" })
  locationTags: string[];

  @SpeakeasyMetadata({ data: "json, name=locationType" })
  locationType: string;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude: number;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: string;

  @SpeakeasyMetadata({ data: "json, name=timezone", elemType: Timezone })
  timezone: Record<string, Timezone>;
}
