import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The shape used to crop the image.
 */
export declare enum GoogleAppsCardV1CardHeaderImageTypeEnum {
    Square = "SQUARE",
    Circle = "CIRCLE"
}
/**
 * Represents a card header.
 */
export declare class GoogleAppsCardV1CardHeader extends SpeakeasyBase {
    /**
     * The alternative text of this image which is used for accessibility.
     */
    imageAltText?: string;
    /**
     * The shape used to crop the image.
     */
    imageType?: GoogleAppsCardV1CardHeaderImageTypeEnum;
    /**
     * The HTTPS URL of the image in the card header.
     */
    imageUrl?: string;
    /**
     * The subtitle of the card header. If specified, appears on its own line below the `title`.
     */
    subtitle?: string;
    /**
     * Required. The title of the card header. The header has a fixed height: if both a title and subtitle are specified, each takes up one line. If only the title is specified, it takes up both lines.
     */
    title?: string;
}
