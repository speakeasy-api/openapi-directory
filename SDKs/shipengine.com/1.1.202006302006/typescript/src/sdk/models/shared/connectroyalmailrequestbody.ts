import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectRoyalMailRequestBody
/** 
 * A Royal Mail account information request body
**/
export class ConnectRoyalMailRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_number" })
  accountNumber: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=company_name" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_name" })
  contactName: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;

  @SpeakeasyMetadata({ data: "json, name=oba_email" })
  obaEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=postal_code" })
  postalCode: string;

  @SpeakeasyMetadata({ data: "json, name=street_line1" })
  streetLine1?: string;

  @SpeakeasyMetadata({ data: "json, name=street_line2" })
  streetLine2?: string;

  @SpeakeasyMetadata({ data: "json, name=street_line3" })
  streetLine3?: string;
}
