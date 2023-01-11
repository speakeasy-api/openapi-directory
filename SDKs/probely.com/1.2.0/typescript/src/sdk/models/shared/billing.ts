import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Billing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=other" })
  other?: string;

  @SpeakeasyMetadata({ data: "json, name=reg_number" })
  regNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=vat_number" })
  vatNumber: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip: string;
}
