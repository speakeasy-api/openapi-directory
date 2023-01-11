import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImprovementProgramMultipartImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=image_file" })
  imageFile: string;
}


export class ImprovementProgramMultipart extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageFile?: ImprovementProgramMultipartImageFile;

  @SpeakeasyMetadata({ data: "multipart_form, name=image_file_b64" })
  imageFileB64?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=image_filename" })
  imageFilename?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=image_url" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=tag" })
  tag?: string;
}
