import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Department extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: Record<string, any>;
}
