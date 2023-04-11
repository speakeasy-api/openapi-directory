import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode405PIISEnum } from "./messagecode405piisenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage405PIIS extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes defined for PIIS for HTTP Error code 405 (METHOD NOT ALLOWED).
     */
    code: MessageCode405PIISEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
