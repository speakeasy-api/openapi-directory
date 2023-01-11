import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ActionActionEnum {
    Null = "null",
    Trial = "trial",
    Plan = "plan",
    Subscribe = "subscribe"
}
export declare class Action extends SpeakeasyBase {
    action?: ActionActionEnum;
}
