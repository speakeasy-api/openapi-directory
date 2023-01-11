import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentLinks } from "./documentlinks";



export class StyleGuide extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: DocumentLinks;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uploaded_at" })
  uploadedAt?: number;
}
