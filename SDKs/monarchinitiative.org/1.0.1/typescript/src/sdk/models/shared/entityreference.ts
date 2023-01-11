import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EntityReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;
}
