import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode401PISEnum } from "./messagecode401pisenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage401PIS extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes defined for PIS for HTTP Error code 401 (UNAUTHORIZED).
     */
    code: MessageCode401PISEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
