import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode401PIISEnum } from "./messagecode401piisenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage401PIIS extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes defined for PIIS for HTTP Error code 401 (UNAUTHORIZED).
     */
    code: MessageCode401PIISEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
