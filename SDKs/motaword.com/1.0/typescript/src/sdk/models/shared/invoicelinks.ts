import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Href } from "./href";



export class InvoiceLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=corporate" })
  corporate?: Href;

  @SpeakeasyMetadata({ data: "json, name=html" })
  html?: Href;

  @SpeakeasyMetadata({ data: "json, name=json" })
  json?: Href;

  @SpeakeasyMetadata({ data: "json, name=pdf" })
  pdf?: Href;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: Href;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: Href;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: Href;
}
