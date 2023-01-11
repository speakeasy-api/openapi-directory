import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrackEvent
/** 
 * A track event
**/
export class TrackEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier_occurred_at" })
  carrierOccurredAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=city_locality" })
  cityLocality: string;

  @SpeakeasyMetadata({ data: "json, name=company_name" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=country_code" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=event_code" })
  eventCode?: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=occurred_at" })
  occurredAt: Date;

  @SpeakeasyMetadata({ data: "json, name=postal_code" })
  postalCode: string;

  @SpeakeasyMetadata({ data: "json, name=signer" })
  signer?: string;

  @SpeakeasyMetadata({ data: "json, name=state_province" })
  stateProvince: string;
}
