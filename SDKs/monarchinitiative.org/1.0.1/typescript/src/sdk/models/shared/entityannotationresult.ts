import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Span } from "./span";



export class EntityAnnotationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=spans", elemType: Span })
  spans?: Span[];
}
