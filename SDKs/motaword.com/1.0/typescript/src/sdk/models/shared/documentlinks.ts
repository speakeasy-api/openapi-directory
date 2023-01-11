import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Href } from "./href";



export class DocumentLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admins", elemType: Href })
  admins?: Record<string, Href>;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: Href;

  @SpeakeasyMetadata({ data: "json, name=editors", elemType: Href })
  editors?: Record<string, Href>;

  @SpeakeasyMetadata({ data: "json, name=preview-box" })
  previewBox?: Href;

  @SpeakeasyMetadata({ data: "json, name=preview-pdf" })
  previewPdf?: Href;

  @SpeakeasyMetadata({ data: "json, name=preview-pdf-viewer" })
  previewPdfViewer?: Href;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: Href;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: Href;

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: Href;
}
