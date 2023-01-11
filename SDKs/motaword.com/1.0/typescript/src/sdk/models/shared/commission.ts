import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Monetary } from "./monetary";
import { Project } from "./project";


export enum CommissionStatusEnum {
    Completed = "completed",
    Unclaimed = "unclaimed",
    Failed = "failed",
    Sent = "sent",
    Waiting = "waiting",
    WaitingInvoice = "waiting_invoice"
}


export class Commission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: Monetary;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: Project;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CommissionStatusEnum;
}
