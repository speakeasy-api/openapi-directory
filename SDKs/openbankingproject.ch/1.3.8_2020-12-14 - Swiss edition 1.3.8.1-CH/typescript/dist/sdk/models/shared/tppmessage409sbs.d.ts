import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode409SBSEnum } from "./messagecode409sbsenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage409SBS extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes defined for signing baskets for HTTP Error code 409 (CONFLICT).
     */
    code: MessageCode409SBSEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
