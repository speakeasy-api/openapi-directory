import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IpProbeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asAge" })
  asAge: number;

  @SpeakeasyMetadata({ data: "json, name=asCidr" })
  asCidr: string;

  @SpeakeasyMetadata({ data: "json, name=asCountryCode" })
  asCountryCode: string;

  @SpeakeasyMetadata({ data: "json, name=asCountryCode3" })
  asCountryCode3: string;

  @SpeakeasyMetadata({ data: "json, name=asDescription" })
  asDescription: string;

  @SpeakeasyMetadata({ data: "json, name=asDomains" })
  asDomains: string[];

  @SpeakeasyMetadata({ data: "json, name=asn" })
  asn: string;

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

  @SpeakeasyMetadata({ data: "json, name=isHosting" })
  isHosting: boolean;

  @SpeakeasyMetadata({ data: "json, name=isIsp" })
  isIsp: boolean;

  @SpeakeasyMetadata({ data: "json, name=isProxy" })
  isProxy: boolean;

  @SpeakeasyMetadata({ data: "json, name=isV4Mapped" })
  isV4Mapped: boolean;

  @SpeakeasyMetadata({ data: "json, name=isV6" })
  isV6: boolean;

  @SpeakeasyMetadata({ data: "json, name=isVpn" })
  isVpn: boolean;

  @SpeakeasyMetadata({ data: "json, name=providerDescription" })
  providerDescription: string;

  @SpeakeasyMetadata({ data: "json, name=providerDomain" })
  providerDomain: string;

  @SpeakeasyMetadata({ data: "json, name=providerType" })
  providerType: string;

  @SpeakeasyMetadata({ data: "json, name=providerWebsite" })
  providerWebsite: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;

  @SpeakeasyMetadata({ data: "json, name=valid" })
  valid: boolean;

  @SpeakeasyMetadata({ data: "json, name=vpnDomain" })
  vpnDomain: string;
}
