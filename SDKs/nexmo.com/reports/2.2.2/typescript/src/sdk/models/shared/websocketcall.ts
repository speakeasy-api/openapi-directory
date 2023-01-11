import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductWebsocketEnum } from "./productwebsocketenum";



// WebsocketCall
/** 
 * WebSocket Call
**/
export class WebsocketCall extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=callback_url" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=date_end" })
  dateEnd?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_start" })
  dateStart?: Date;

  @SpeakeasyMetadata({ data: "json, name=include_subaccounts" })
  includeSubaccounts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product: ProductWebsocketEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
