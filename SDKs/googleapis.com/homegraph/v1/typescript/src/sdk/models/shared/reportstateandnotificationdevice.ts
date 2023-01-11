import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReportStateAndNotificationDevice
/** 
 * The states and notifications specific to a device.
**/
export class ReportStateAndNotificationDevice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notifications" })
  notifications?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=states" })
  states?: Record<string, any>;
}
