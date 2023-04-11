import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode400PISEnum } from "./messagecode400pisenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage400PIS extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes defined for PIS for HTTP Error code 400 (BAD_REQUEST).
     */
    code: MessageCode400PISEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
