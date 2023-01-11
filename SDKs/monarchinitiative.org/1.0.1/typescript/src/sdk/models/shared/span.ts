import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Token } from "./token";



export class Span extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=token", elemType: Token })
  token?: Token[];
}
