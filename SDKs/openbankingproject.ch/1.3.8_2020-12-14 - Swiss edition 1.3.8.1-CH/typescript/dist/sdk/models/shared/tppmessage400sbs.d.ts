import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode400SBSEnum } from "./messagecode400sbsenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage400SBS extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes defined for signing baskets for HTTP Error code 400 (BAD_REQUEST).
     */
    code: MessageCode400SBSEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
