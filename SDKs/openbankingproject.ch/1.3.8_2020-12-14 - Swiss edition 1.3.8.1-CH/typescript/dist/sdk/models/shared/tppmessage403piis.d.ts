import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode403PIISEnum } from "./messagecode403piisenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage403PIIS extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes defined for PIIS for HTTP Error code 403 (FORBIDDEN).
     */
    code: MessageCode403PIISEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
