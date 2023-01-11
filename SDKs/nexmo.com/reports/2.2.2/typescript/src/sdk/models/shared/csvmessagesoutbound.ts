import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectionEnum } from "./directionenum";



// CsvMessagesOutbound
/** 
 * Outbound Messages
**/
export class CsvMessagesOutbound extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=country_name" })
  countryName?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=date_finalized" })
  dateFinalized?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_received" })
  dateReceived?: Date;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: DirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=error_code" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=latency" })
  latency?: number;

  @SpeakeasyMetadata({ data: "json, name=message_body" })
  messageBody?: string;

  @SpeakeasyMetadata({ data: "json, name=message_id" })
  messageId?: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;

  @SpeakeasyMetadata({ data: "json, name=total_price" })
  totalPrice?: number;
}
