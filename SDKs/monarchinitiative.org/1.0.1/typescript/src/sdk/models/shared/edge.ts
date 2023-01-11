import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Edge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=obj" })
  obj?: string;

  @SpeakeasyMetadata({ data: "json, name=pred" })
  pred?: string;

  @SpeakeasyMetadata({ data: "json, name=sub" })
  sub?: string;
}
