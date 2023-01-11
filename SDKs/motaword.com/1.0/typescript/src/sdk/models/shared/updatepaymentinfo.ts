import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePaymentInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bin" })
  bin?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=save_as_corporate_primary" })
  saveAsCorporatePrimary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=share_with_corporate_users" })
  shareWithCorporateUsers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=street" })
  street?: string;

  @SpeakeasyMetadata({ data: "json, name=stripeToken" })
  stripeToken?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}
