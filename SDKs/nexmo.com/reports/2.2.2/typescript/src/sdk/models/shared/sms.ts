import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectionEnum } from "./directionenum";
import { ProductSmsEnum } from "./productsmsenum";
import { SmsStatusEnum } from "./smsstatusenum";



// Sms
/** 
 * SMS
**/
export class Sms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=account_ref" })
  accountRef?: string;

  @SpeakeasyMetadata({ data: "json, name=callback_url" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=date_end" })
  dateEnd?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_start" })
  dateStart?: Date;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction: DirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=include_message" })
  includeMessage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=include_subaccounts" })
  includeSubaccounts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product: ProductSmsEnum;

  @SpeakeasyMetadata({ data: "json, name=show_concatenated" })
  showConcatenated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SmsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}
