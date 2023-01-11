import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddressToValidate
/** 
 * A complete or partial mailing address.
**/
export class AddressToValidate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address_line1" })
  addressLine1: string;

  @SpeakeasyMetadata({ data: "json, name=address_line2" })
  addressLine2?: string;

  @SpeakeasyMetadata({ data: "json, name=address_line3" })
  addressLine3?: string;

  @SpeakeasyMetadata({ data: "json, name=address_residential_indicator" })
  addressResidentialIndicator?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=city_locality" })
  cityLocality: string;

  @SpeakeasyMetadata({ data: "json, name=company_name" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=country_code" })
  countryCode: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=state_province" })
  stateProvince: string;
}
