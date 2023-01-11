import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SalesActivity } from "./salesactivity";



export class SalesActivities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activities", elemType: SalesActivity })
  activities?: SalesActivity[];
}
