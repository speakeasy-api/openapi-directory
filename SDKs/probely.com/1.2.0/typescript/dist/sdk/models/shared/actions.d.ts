import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ActionsActionEnum {
    Edit = "edit",
    Delete = "delete",
    Trial = "trial",
    Plan = "plan",
    Subscribe = "subscribe",
    Unsubscribe = "unsubscribe",
    Archive = "archive",
    Activate = "activate"
}
export declare class Actions extends SpeakeasyBase {
    action?: ActionsActionEnum;
    label?: string;
}
