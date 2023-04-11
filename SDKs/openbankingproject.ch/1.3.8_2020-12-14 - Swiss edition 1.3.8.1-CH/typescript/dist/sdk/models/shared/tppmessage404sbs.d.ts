import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode404SBSEnum } from "./messagecode404sbsenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage404SBS extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes defined for signing baskets for HTTP Error code 404 (NOT FOUND).
     */
    code: MessageCode404SBSEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
