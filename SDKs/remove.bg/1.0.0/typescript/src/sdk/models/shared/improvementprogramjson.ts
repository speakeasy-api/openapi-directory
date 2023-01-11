import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImprovementProgramJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image_file_b64, form, name=image_file_b64;" })
  imageFileB64?: string;

  @SpeakeasyMetadata({ data: "json, name=image_filename, form, name=image_filename;" })
  imageFilename?: string;

  @SpeakeasyMetadata({ data: "json, name=image_url, form, name=image_url;" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=tag, form, name=tag;" })
  tag?: string;
}
