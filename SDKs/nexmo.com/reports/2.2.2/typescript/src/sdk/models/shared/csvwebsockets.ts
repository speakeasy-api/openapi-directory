import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CsvWebsockets
/** 
 * WebSocket Call
**/
export class CsvWebsockets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=call_id" })
  callId?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=date_end" })
  dateEnd?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_start" })
  dateStart?: Date;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=total_price" })
  totalPrice?: number;
}
