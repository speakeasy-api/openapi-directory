import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpsInvoice
/** 
 * UPS invoice
**/
export class UpsInvoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=control_id" })
  controlId?: string;

  @SpeakeasyMetadata({ data: "json, name=invoice_amount" })
  invoiceAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=invoice_date" })
  invoiceDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=invoice_number" })
  invoiceNumber?: string;
}
