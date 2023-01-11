import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpsInvoice } from "./upsinvoice";



// ConnectUpsRequestBody
/** 
 * A UPS account information request body
**/
export class ConnectUpsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_country_code" })
  accountCountryCode: string;

  @SpeakeasyMetadata({ data: "json, name=account_number" })
  accountNumber: string;

  @SpeakeasyMetadata({ data: "json, name=account_postal_code" })
  accountPostalCode: string;

  @SpeakeasyMetadata({ data: "json, name=address1" })
  address1: string;

  @SpeakeasyMetadata({ data: "json, name=address2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=agree_to_technology_agreement" })
  agreeToTechnologyAgreement: boolean;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company: string;

  @SpeakeasyMetadata({ data: "json, name=country_code" })
  countryCode: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=invoice" })
  invoice?: UpsInvoice;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone: string;

  @SpeakeasyMetadata({ data: "json, name=postal_code" })
  postalCode: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
