import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1OnClick } from "./googleappscardv1onclick";
/**
 * An image that is specified by a URL and can have an `onClick` action.
 */
export declare class GoogleAppsCardV1Image extends SpeakeasyBase {
    /**
     * The alternative text of this image, used for accessibility.
     */
    altText?: string;
    /**
     * The `https` URL that hosts the image. For example: ``` https://developers.google.com/chat/images/quickstart-app-avatar.png ```
     */
    imageUrl?: string;
    /**
     * Represents how to respond when users click an interactive element on a card, such as a button.
     */
    onClick?: GoogleAppsCardV1OnClick;
}
