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
    /**
     * the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
     */
    date?: Date;
    project?: Project;
    status?: CommissionStatusEnum;
}
