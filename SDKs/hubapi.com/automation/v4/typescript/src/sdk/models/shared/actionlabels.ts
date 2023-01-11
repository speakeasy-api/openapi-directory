import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionLabels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionCardContent" })
  actionCardContent?: string;

  @SpeakeasyMetadata({ data: "json, name=actionDescription" })
  actionDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=actionName" })
  actionName?: string;

  @SpeakeasyMetadata({ data: "json, name=appDisplayName" })
  appDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=inputFieldDescriptions" })
  inputFieldDescriptions?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=inputFieldLabels" })
  inputFieldLabels?: Record<string, string>;
}
