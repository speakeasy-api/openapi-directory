import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChangedBy } from "./changedby";



export class Activity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=change" })
  change?: number;

  @SpeakeasyMetadata({ data: "json, name=changed" })
  changed?: Date;

  @SpeakeasyMetadata({ data: "json, name=changed_by" })
  changedBy?: ChangedBy;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=old_value" })
  oldValue?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
