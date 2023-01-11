import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GraphQlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operationName" })
  operationName?: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query: string;

  @SpeakeasyMetadata({ data: "json, name=variables" })
  variables?: Record<string, any>;
}
