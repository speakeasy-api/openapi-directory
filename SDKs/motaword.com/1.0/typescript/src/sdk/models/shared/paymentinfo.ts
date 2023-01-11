import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingAddress } from "./billingaddress";
import { CreditCard } from "./creditcard";



export class PaymentInfoCorporate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_api_invoicing" })
  allowApiInvoicing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_payment_code" })
  allowPaymentCode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auto_charge" })
  autoCharge?: boolean;

  @SpeakeasyMetadata({ data: "json, name=billing" })
  billing?: BillingAddress;

  @SpeakeasyMetadata({ data: "json, name=card" })
  card?: CreditCard;

  @SpeakeasyMetadata({ data: "json, name=contact_email_address" })
  contactEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=payment_code" })
  paymentCode?: string;
}


export class PaymentInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billing" })
  billing?: BillingAddress;

  @SpeakeasyMetadata({ data: "json, name=card" })
  card?: CreditCard;

  @SpeakeasyMetadata({ data: "json, name=corporate" })
  corporate?: PaymentInfoCorporate;

  @SpeakeasyMetadata({ data: "json, name=shared_card" })
  sharedCard?: CreditCard;
}
