import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PhoneValidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode3" })
  countryCode3: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode: string;

  @SpeakeasyMetadata({ data: "json, name=internationalCallingCode" })
  internationalCallingCode: number;

  @SpeakeasyMetadata({ data: "json, name=internationalNumber" })
  internationalNumber: string;

  @SpeakeasyMetadata({ data: "json, name=isMobile" })
  isMobile: boolean;

  @SpeakeasyMetadata({ data: "json, name=localNumber" })
  localNumber: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "json, name=prefixNetwork" })
  prefixNetwork: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=valid" })
  valid: boolean;
}
