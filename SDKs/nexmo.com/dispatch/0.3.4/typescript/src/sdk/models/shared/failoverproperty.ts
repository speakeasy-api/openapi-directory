import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FailoverPropertyConditionStatusEnum {
    Delivered = "delivered",
    Read = "read"
}


// FailoverProperty
/** 
 * Please note that last message does not have failover attribute inside it. All other messages must contain a failover attribute.
**/
export class FailoverProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition_status" })
  conditionStatus?: FailoverPropertyConditionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=expiry_time" })
  expiryTime?: number;
}
