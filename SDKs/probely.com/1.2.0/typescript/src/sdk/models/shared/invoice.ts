import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvoiceDiscounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}


export class InvoiceLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discount_amount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=tax_amount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=unit_amount" })
  unitAmount?: number;
}


export class InvoiceTaxes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tax_amount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=tax_name" })
  taxName?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_rate" })
  taxRate?: number;
}


export class Invoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount_due" })
  amountDue?: number;

  @SpeakeasyMetadata({ data: "json, name=amount_paid" })
  amountPaid?: number;

  @SpeakeasyMetadata({ data: "json, name=currency_code" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=discounts", elemType: InvoiceDiscounts })
  discounts?: InvoiceDiscounts[];

  @SpeakeasyMetadata({ data: "json, name=line_items", elemType: InvoiceLineItems })
  lineItems?: InvoiceLineItems[];

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan?: string;

  @SpeakeasyMetadata({ data: "json, name=plan_id" })
  planId?: string;

  @SpeakeasyMetadata({ data: "json, name=sub_total" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=taxes", elemType: InvoiceTaxes })
  taxes?: InvoiceTaxes[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
