import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RemoveBgJsonChannelsEnum {
    Rgba = "rgba",
    Alpha = "alpha"
}
export declare enum RemoveBgJsonFormatEnum {
    Auto = "auto",
    Png = "png",
    Jpg = "jpg",
    Zip = "zip"
}
export declare enum RemoveBgJsonSizeEnum {
    Preview = "preview",
    Full = "full",
    Auto = "auto"
}
export declare enum RemoveBgJsonTypeEnum {
    Auto = "auto",
    Person = "person",
    Product = "product",
    Car = "car"
}
export declare enum RemoveBgJsonTypeLevelEnum {
    None = "none",
    One = "1",
    Two = "2",
    Latest = "latest"
}
export declare class RemoveBgJson extends SpeakeasyBase {
    addShadow?: boolean;
    bgColor?: string;
    bgImageUrl?: string;
    channels?: RemoveBgJsonChannelsEnum;
    crop?: boolean;
    cropMargin?: string;
    format?: RemoveBgJsonFormatEnum;
    imageFileB64?: string;
    imageUrl?: string;
    position?: string;
    roi?: string;
    scale?: string;
    semitransparency?: boolean;
    size?: RemoveBgJsonSizeEnum;
    type?: RemoveBgJsonTypeEnum;
    typeLevel?: RemoveBgJsonTypeLevelEnum;
}
