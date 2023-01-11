import { SpeakeasyBase } from "../../../internal/utils";
export declare class RemoveBgMultipartBgImageFile extends SpeakeasyBase {
    bgImageFile: string;
    content: Uint8Array;
}
export declare enum RemoveBgMultipartChannelsEnum {
    Rgba = "rgba",
    Alpha = "alpha"
}
export declare enum RemoveBgMultipartFormatEnum {
    Auto = "auto",
    Png = "png",
    Jpg = "jpg",
    Zip = "zip"
}
export declare class RemoveBgMultipartImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare enum RemoveBgMultipartSizeEnum {
    Preview = "preview",
    Full = "full",
    Auto = "auto"
}
export declare enum RemoveBgMultipartTypeEnum {
    Auto = "auto",
    Person = "person",
    Product = "product",
    Car = "car"
}
export declare enum RemoveBgMultipartTypeLevelEnum {
    None = "none",
    One = "1",
    Two = "2",
    Latest = "latest"
}
export declare class RemoveBgMultipart extends SpeakeasyBase {
    addShadow?: boolean;
    bgColor?: string;
    bgImageFile?: RemoveBgMultipartBgImageFile;
    bgImageUrl?: string;
    channels?: RemoveBgMultipartChannelsEnum;
    crop?: boolean;
    cropMargin?: string;
    format?: RemoveBgMultipartFormatEnum;
    imageFile?: RemoveBgMultipartImageFile;
    imageFileB64?: string;
    imageUrl?: string;
    position?: string;
    roi?: string;
    scale?: string;
    semitransparency?: boolean;
    size?: RemoveBgMultipartSizeEnum;
    type?: RemoveBgMultipartTypeEnum;
    typeLevel?: RemoveBgMultipartTypeLevelEnum;
}
