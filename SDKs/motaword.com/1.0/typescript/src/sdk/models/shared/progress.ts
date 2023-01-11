import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProgressSub } from "./progresssub";
import { ProgressLink } from "./progresslink";
import { ProjectStatusEnum } from "./projectstatusenum";



export class Progress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languages", elemType: ProgressSub })
  languages?: Record<string, ProgressSub>;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ProgressLink;

  @SpeakeasyMetadata({ data: "json, name=project_status" })
  projectStatus?: ProjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=proofreading" })
  proofreading?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=translation" })
  translation?: number;
}
