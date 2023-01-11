import { SpeakeasyBase } from "../../../internal/utils";
import { Monetary } from "./monetary";
import { Project } from "./project";
export declare enum CommissionStatusEnum {
    Completed = "completed",
    Unclaimed = "unclaimed",
    Failed = "failed",
    Sent = "sent",
    Waiting = "waiting",
    WaitingInvoice = "waiting_invoice"
}
export declare class Commission extends SpeakeasyBase {
    amount?: Monetary;
    date?: Date;
    project?: Project;
    status?: CommissionStatusEnum;
}
