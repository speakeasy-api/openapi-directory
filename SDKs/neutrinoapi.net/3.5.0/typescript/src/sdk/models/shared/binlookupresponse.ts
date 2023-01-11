import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BinLookupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cardBrand" })
  cardBrand: string;

  @SpeakeasyMetadata({ data: "json, name=cardCategory" })
  cardCategory: string;

  @SpeakeasyMetadata({ data: "json, name=cardType" })
  cardType: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode3" })
  countryCode3: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode: string;

  @SpeakeasyMetadata({ data: "json, name=ipBlocklisted" })
  ipBlocklisted: boolean;

  @SpeakeasyMetadata({ data: "json, name=ipBlocklists" })
  ipBlocklists: string[];

  @SpeakeasyMetadata({ data: "json, name=ipCity" })
  ipCity: string;

  @SpeakeasyMetadata({ data: "json, name=ipCountry" })
  ipCountry: string;

  @SpeakeasyMetadata({ data: "json, name=ipCountryCode" })
  ipCountryCode: string;

  @SpeakeasyMetadata({ data: "json, name=ipCountryCode3" })
  ipCountryCode3: string;

  @SpeakeasyMetadata({ data: "json, name=ipMatchesBin" })
  ipMatchesBin: boolean;

  @SpeakeasyMetadata({ data: "json, name=ipRegion" })
  ipRegion: string;

  @SpeakeasyMetadata({ data: "json, name=isCommercial" })
  isCommercial: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPrepaid" })
  isPrepaid: boolean;

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer: string;

  @SpeakeasyMetadata({ data: "json, name=issuerPhone" })
  issuerPhone: string;

  @SpeakeasyMetadata({ data: "json, name=issuerWebsite" })
  issuerWebsite: string;

  @SpeakeasyMetadata({ data: "json, name=valid" })
  valid: boolean;
}
