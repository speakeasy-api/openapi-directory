import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingAddress } from "./billingaddress";
import { InvoiceLinks } from "./invoicelinks";



export class Invoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=billing" })
  billing?: BillingAddress;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=invoice_no" })
  invoiceNo?: number;

  @SpeakeasyMetadata({ data: "json, name=invoiced_at" })
  invoicedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: InvoiceLinks;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
