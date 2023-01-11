import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TemplatePropertyParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=default" })
  default?: string;
}


export class TemplateProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: TemplatePropertyParameters })
  parameters?: TemplatePropertyParameters[];
}
