import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Project } from "./project";
import { ProjectStatusEnum } from "./projectstatusenum";



export class CallbackResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Project;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ProjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
