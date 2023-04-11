import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode401SBSEnum } from "./messagecode401sbsenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage401SBS extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes defined for signing baskets for HTTP Error code 401 (UNAUTHORIZED).
     */
    code: MessageCode401SBSEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
