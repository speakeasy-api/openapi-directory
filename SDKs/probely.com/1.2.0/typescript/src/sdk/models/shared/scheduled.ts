import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChangedBy } from "./changedby";
import { RecurrenceEnum } from "./recurrenceenum";
import { TargetSimple } from "./targetsimple";



export class Scheduled extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changed" })
  changed?: Date;

  @SpeakeasyMetadata({ data: "json, name=changed_by" })
  changedBy?: ChangedBy;

  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=recurrence" })
  recurrence?: RecurrenceEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: TargetSimple;
}
