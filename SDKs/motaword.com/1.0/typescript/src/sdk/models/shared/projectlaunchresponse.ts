import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectLaunchResponseEnumEnum } from "./projectlaunchresponseenumenum";



export class ProjectLaunchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ProjectLaunchResponseEnumEnum;
}
