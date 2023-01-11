import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SendWithFailoverMessage } from "./sendwithfailovermessage";
import { SendMessage } from "./sendmessage";


export enum CreateWorkflowTemplateEnum {
    Failover = "failover"
}


export class CreateWorkflow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: CreateWorkflowTemplateEnum;

  @SpeakeasyMetadata({ data: "json, name=workflow" })
  workflow?: any[];
}
