import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductInAppVoiceEnum } from "./productinappvoiceenum";



// InAppVoice
/** 
 * In App Voice
**/
export class InAppVoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=callback_url" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=conversation_id" })
  conversationId?: string;

  @SpeakeasyMetadata({ data: "json, name=date_end" })
  dateEnd?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_start" })
  dateStart?: Date;

  @SpeakeasyMetadata({ data: "json, name=include_subaccounts" })
  includeSubaccounts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product: ProductInAppVoiceEnum;
}
