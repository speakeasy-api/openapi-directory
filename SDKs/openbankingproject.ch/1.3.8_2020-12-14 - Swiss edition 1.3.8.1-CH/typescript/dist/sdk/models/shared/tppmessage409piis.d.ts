import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode409PIISEnum } from "./messagecode409piisenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage409PIIS extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes defined for PIIS for HTTP Error code 409 (CONFLICT).
     */
    code: MessageCode409PIISEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
