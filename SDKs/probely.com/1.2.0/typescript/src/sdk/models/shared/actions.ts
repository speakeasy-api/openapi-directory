import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ActionsActionEnum {
    Edit = "edit",
    Delete = "delete",
    Trial = "trial",
    Plan = "plan",
    Subscribe = "subscribe",
    Unsubscribe = "unsubscribe",
    Archive = "archive",
    Activate = "activate"
}


export class Actions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: ActionsActionEnum;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;
}
