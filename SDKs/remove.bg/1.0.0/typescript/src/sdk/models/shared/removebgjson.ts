import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RemoveBgJsonChannelsEnum {
    Rgba = "rgba",
    Alpha = "alpha"
}

export enum RemoveBgJsonFormatEnum {
    Auto = "auto",
    Png = "png",
    Jpg = "jpg",
    Zip = "zip"
}

export enum RemoveBgJsonSizeEnum {
    Preview = "preview",
    Full = "full",
    Auto = "auto"
}

export enum RemoveBgJsonTypeEnum {
    Auto = "auto",
    Person = "person",
    Product = "product",
    Car = "car"
}

export enum RemoveBgJsonTypeLevelEnum {
    None = "none",
    One = "1",
    Two = "2",
    Latest = "latest"
}


export class RemoveBgJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_shadow, form, name=add_shadow;" })
  addShadow?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bg_color, form, name=bg_color;" })
  bgColor?: string;

  @SpeakeasyMetadata({ data: "json, name=bg_image_url, form, name=bg_image_url;" })
  bgImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=channels, form, name=channels;" })
  channels?: RemoveBgJsonChannelsEnum;

  @SpeakeasyMetadata({ data: "json, name=crop, form, name=crop;" })
  crop?: boolean;

  @SpeakeasyMetadata({ data: "json, name=crop_margin, form, name=crop_margin;" })
  cropMargin?: string;

  @SpeakeasyMetadata({ data: "json, name=format, form, name=format;" })
  format?: RemoveBgJsonFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=image_file_b64, form, name=image_file_b64;" })
  imageFileB64?: string;

  @SpeakeasyMetadata({ data: "json, name=image_url, form, name=image_url;" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=position, form, name=position;" })
  position?: string;

  @SpeakeasyMetadata({ data: "json, name=roi, form, name=roi;" })
  roi?: string;

  @SpeakeasyMetadata({ data: "json, name=scale, form, name=scale;" })
  scale?: string;

  @SpeakeasyMetadata({ data: "json, name=semitransparency, form, name=semitransparency;" })
  semitransparency?: boolean;

  @SpeakeasyMetadata({ data: "json, name=size, form, name=size;" })
  size?: RemoveBgJsonSizeEnum;

  @SpeakeasyMetadata({ data: "json, name=type, form, name=type;" })
  type?: RemoveBgJsonTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=type_level, form, name=type_level;" })
  typeLevel?: RemoveBgJsonTypeLevelEnum;
}
