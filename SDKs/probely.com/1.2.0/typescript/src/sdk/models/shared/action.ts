import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ActionActionEnum {
    Null = "null",
    Trial = "trial",
    Plan = "plan",
    Subscribe = "subscribe"
}


export class Action extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: ActionActionEnum;
}
