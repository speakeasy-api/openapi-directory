import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HlrLookupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode3" })
  countryCode3: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode: string;

  @SpeakeasyMetadata({ data: "json, name=currentNetwork" })
  currentNetwork: string;

  @SpeakeasyMetadata({ data: "json, name=hlrStatus" })
  hlrStatus: string;

  @SpeakeasyMetadata({ data: "json, name=hlrValid" })
  hlrValid: boolean;

  @SpeakeasyMetadata({ data: "json, name=imsi" })
  imsi: string;

  @SpeakeasyMetadata({ data: "json, name=internationalCallingCode" })
  internationalCallingCode: number;

  @SpeakeasyMetadata({ data: "json, name=internationalNumber" })
  internationalNumber: string;

  @SpeakeasyMetadata({ data: "json, name=isMobile" })
  isMobile: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPorted" })
  isPorted: boolean;

  @SpeakeasyMetadata({ data: "json, name=isRoaming" })
  isRoaming: boolean;

  @SpeakeasyMetadata({ data: "json, name=localNumber" })
  localNumber: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "json, name=mcc" })
  mcc: string;

  @SpeakeasyMetadata({ data: "json, name=mnc" })
  mnc: string;

  @SpeakeasyMetadata({ data: "json, name=msc" })
  msc: string;

  @SpeakeasyMetadata({ data: "json, name=msin" })
  msin: string;

  @SpeakeasyMetadata({ data: "json, name=numberType" })
  numberType: string;

  @SpeakeasyMetadata({ data: "json, name=numberValid" })
  numberValid: boolean;

  @SpeakeasyMetadata({ data: "json, name=originNetwork" })
  originNetwork: string;

  @SpeakeasyMetadata({ data: "json, name=portedNetwork" })
  portedNetwork: string;

  @SpeakeasyMetadata({ data: "json, name=roamingCountryCode" })
  roamingCountryCode: string;
}
