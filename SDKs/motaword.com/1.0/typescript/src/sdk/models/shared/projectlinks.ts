import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Href } from "./href";



export class ProjectLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documents" })
  documents?: Href;

  @SpeakeasyMetadata({ data: "json, name=glossaries" })
  glossaries?: Href;

  @SpeakeasyMetadata({ data: "json, name=payment" })
  payment?: Href;

  @SpeakeasyMetadata({ data: "json, name=quote-pdf" })
  quotePdf?: Href;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: Href;

  @SpeakeasyMetadata({ data: "json, name=styleguides" })
  styleguides?: Href;
}
