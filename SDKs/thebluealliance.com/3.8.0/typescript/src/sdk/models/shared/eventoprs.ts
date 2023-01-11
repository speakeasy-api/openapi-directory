import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventOpRs
/** 
 * OPR, DPR, and CCWM for teams at the event.
**/
export class EventOpRs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ccwms" })
  ccwms?: Record<string, number>;

  @SpeakeasyMetadata({ data: "json, name=dprs" })
  dprs?: Record<string, number>;

  @SpeakeasyMetadata({ data: "json, name=oprs" })
  oprs?: Record<string, number>;
}
