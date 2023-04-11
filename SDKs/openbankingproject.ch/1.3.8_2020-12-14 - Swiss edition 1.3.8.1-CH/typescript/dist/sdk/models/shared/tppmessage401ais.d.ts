import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode401AISEnum } from "./messagecode401aisenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage401AIS extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes defined for AIS for HTTP Error code 401 (UNAUTHORIZED).
     */
    code: MessageCode401AISEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
