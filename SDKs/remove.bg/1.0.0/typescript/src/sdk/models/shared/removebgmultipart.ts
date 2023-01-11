import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveBgMultipartBgImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=bg_image_file" })
  bgImageFile: string;

  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;
}

export enum RemoveBgMultipartChannelsEnum {
    Rgba = "rgba",
    Alpha = "alpha"
}

export enum RemoveBgMultipartFormatEnum {
    Auto = "auto",
    Png = "png",
    Jpg = "jpg",
    Zip = "zip"
}


export class RemoveBgMultipartImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=image_file" })
  imageFile: string;
}

export enum RemoveBgMultipartSizeEnum {
    Preview = "preview",
    Full = "full",
    Auto = "auto"
}

export enum RemoveBgMultipartTypeEnum {
    Auto = "auto",
    Person = "person",
    Product = "product",
    Car = "car"
}

export enum RemoveBgMultipartTypeLevelEnum {
    None = "none",
    One = "1",
    Two = "2",
    Latest = "latest"
}


export class RemoveBgMultipart extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=add_shadow" })
  addShadow?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=bg_color" })
  bgColor?: string;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  bgImageFile?: RemoveBgMultipartBgImageFile;

  @SpeakeasyMetadata({ data: "multipart_form, name=bg_image_url" })
  bgImageUrl?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=channels" })
  channels?: RemoveBgMultipartChannelsEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=crop" })
  crop?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=crop_margin" })
  cropMargin?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=format" })
  format?: RemoveBgMultipartFormatEnum;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageFile?: RemoveBgMultipartImageFile;

  @SpeakeasyMetadata({ data: "multipart_form, name=image_file_b64" })
  imageFileB64?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=image_url" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=position" })
  position?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=roi" })
  roi?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=scale" })
  scale?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=semitransparency" })
  semitransparency?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=size" })
  size?: RemoveBgMultipartSizeEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type?: RemoveBgMultipartTypeEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=type_level" })
  typeLevel?: RemoveBgMultipartTypeLevelEnum;
}
