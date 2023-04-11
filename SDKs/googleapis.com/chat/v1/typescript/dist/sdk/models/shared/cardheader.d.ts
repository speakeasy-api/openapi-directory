import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The image's type (e.g. square border or circular border).
 */
export declare enum CardHeaderImageStyleEnum {
    ImageStyleUnspecified = "IMAGE_STYLE_UNSPECIFIED",
    Image = "IMAGE",
    Avatar = "AVATAR"
}
export declare class CardHeader extends SpeakeasyBase {
    /**
     * The image's type (e.g. square border or circular border).
     */
    imageStyle?: CardHeaderImageStyleEnum;
    /**
     * The URL of the image in the card header.
     */
    imageUrl?: string;
    /**
     * The subtitle of the card header.
     */
    subtitle?: string;
    /**
     * The title must be specified. The header has a fixed height: if both a title and subtitle is specified, each will take up 1 line. If only the title is specified, it will take up both lines.
     */
    title?: string;
}
