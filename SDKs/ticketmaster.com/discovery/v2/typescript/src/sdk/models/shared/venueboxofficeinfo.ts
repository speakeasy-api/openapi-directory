import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VenueBoxOfficeInfo
/** 
 * Venue box office information
**/
export class VenueBoxOfficeInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptedPaymentDetail?: string;

  @SpeakeasyMetadata()
  openHoursDetail?: string;

  @SpeakeasyMetadata()
  phoneNumberDetail?: string;

  @SpeakeasyMetadata()
  willCallDetail?: string;
}
