import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrackEvent } from "./trackevent";



// GetTrackingLogFromLabelResponseBody
/** 
 * A tracking information resource
**/
export class GetTrackingLogFromLabelResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actual_delivery_date" })
  actualDeliveryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=carrier_status_code" })
  carrierStatusCode: string;

  @SpeakeasyMetadata({ data: "json, name=carrier_status_description" })
  carrierStatusDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=estimated_delivery_date" })
  estimatedDeliveryDate: Date;

  @SpeakeasyMetadata({ data: "json, name=events", elemType: TrackEvent })
  events: TrackEvent[];

  @SpeakeasyMetadata({ data: "json, name=exception_description" })
  exceptionDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ship_date" })
  shipDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: string;

  @SpeakeasyMetadata({ data: "json, name=status_description" })
  statusDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=tracking_number" })
  trackingNumber: string;
}
