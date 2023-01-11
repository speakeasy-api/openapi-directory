import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Assignee } from "./assignee";
import { ChangedBy } from "./changedby";
import { Definition } from "./definition";
import { FindingInsertionPointEnum } from "./findinginsertionpointenum";
import { MethodEnum } from "./methodenum";
import { Reporter } from "./reporter";
import { Requests } from "./requests";
import { FindingSeverityEnum } from "./findingseverityenum";
import { FindingStateEnum } from "./findingstateenum";
import { TargetSimple } from "./targetsimple";



export class Finding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignee" })
  assignee?: Assignee;

  @SpeakeasyMetadata({ data: "json, name=changed" })
  changed?: Date;

  @SpeakeasyMetadata({ data: "json, name=changed_by" })
  changedBy?: ChangedBy;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=cvss_score" })
  cvssScore?: number;

  @SpeakeasyMetadata({ data: "json, name=cvss_vector" })
  cvssVector?: string;

  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition?: Definition;

  @SpeakeasyMetadata({ data: "json, name=evidence" })
  evidence?: string;

  @SpeakeasyMetadata({ data: "json, name=extra" })
  extra?: string;

  @SpeakeasyMetadata({ data: "json, name=fix" })
  fix?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=insertion_point" })
  insertionPoint?: FindingInsertionPointEnum;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: string[];

  @SpeakeasyMetadata({ data: "json, name=last_found" })
  lastFound?: Date;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: MethodEnum;

  @SpeakeasyMetadata({ data: "json, name=parameter" })
  parameter?: string;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=reporter" })
  reporter?: Reporter;

  @SpeakeasyMetadata({ data: "json, name=requests", elemType: Requests })
  requests?: Requests[];

  @SpeakeasyMetadata({ data: "json, name=scans" })
  scans?: string[];

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: FindingSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: FindingStateEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: TargetSimple;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
