import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VenueBoxOfficeInfo
/** 
 * Venue box office information
**/
export class VenueBoxOfficeInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceptedPaymentDetails" })
  acceptedPaymentDetails?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=openHoursDetails" })
  openHoursDetails?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=phoneNumberDetails" })
  phoneNumberDetails?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=willCallDetails" })
  willCallDetails?: Record<string, string>;
}
