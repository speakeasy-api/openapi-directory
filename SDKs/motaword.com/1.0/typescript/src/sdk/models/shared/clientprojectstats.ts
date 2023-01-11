import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientProjectStat } from "./clientprojectstat";



export class ClientProjectStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stats", elemType: ClientProjectStat })
  stats?: ClientProjectStat[];
}
