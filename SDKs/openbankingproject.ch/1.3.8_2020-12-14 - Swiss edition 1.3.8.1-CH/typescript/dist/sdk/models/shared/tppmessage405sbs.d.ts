import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode405SBSEnum } from "./messagecode405sbsenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage405SBS extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes defined for SBS for HTTP Error code 405 (METHOD NOT ALLOWED).
     */
    code: MessageCode405SBSEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
