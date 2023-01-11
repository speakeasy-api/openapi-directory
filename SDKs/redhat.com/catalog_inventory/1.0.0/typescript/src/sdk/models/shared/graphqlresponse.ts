import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GraphQlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Record<string, any>[];
}
