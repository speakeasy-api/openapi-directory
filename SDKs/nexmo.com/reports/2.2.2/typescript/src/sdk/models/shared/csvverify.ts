import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CsvVerify
/** 
 * Verify
**/
export class CsvVerify extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

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

  @SpeakeasyMetadata({ data: "json, name=estimated_price" })
  estimatedPrice?: string;

  @SpeakeasyMetadata({ data: "json, name=first_event_date" })
  firstEventDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=last_event_date" })
  lastEventDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=network_name" })
  networkName?: string;

  @SpeakeasyMetadata({ data: "json, name=number_type" })
  numberType?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=pricing_model" })
  pricingModel?: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=sms_event_count" })
  smsEventCount?: number;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;

  @SpeakeasyMetadata({ data: "json, name=tts_event_count" })
  ttsEventCount?: number;

  @SpeakeasyMetadata({ data: "json, name=verify_status" })
  verifyStatus?: string;
}
