import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode403SBSEnum } from "./messagecode403sbsenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage403SBS extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes defined for signing baskets for HTTP Error code 403 (FORBIDDEN).
     */
    code: MessageCode403SBSEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
