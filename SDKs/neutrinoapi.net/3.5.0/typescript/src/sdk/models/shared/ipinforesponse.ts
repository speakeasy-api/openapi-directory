import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Timezone } from "./timezone";



export class IpInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=continentCode" })
  continentCode: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode3" })
  countryCode3: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode: string;

  @SpeakeasyMetadata({ data: "json, name=hostDomain" })
  hostDomain: string;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;

  @SpeakeasyMetadata({ data: "json, name=isBogon" })
  isBogon: boolean;

  @SpeakeasyMetadata({ data: "json, name=isV4Mapped" })
  isV4Mapped: boolean;

  @SpeakeasyMetadata({ data: "json, name=isV6" })
  isV6: boolean;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude: number;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;

  @SpeakeasyMetadata({ data: "json, name=timezone", elemType: Timezone })
  timezone: Record<string, Timezone>;

  @SpeakeasyMetadata({ data: "json, name=valid" })
  valid: boolean;
}
