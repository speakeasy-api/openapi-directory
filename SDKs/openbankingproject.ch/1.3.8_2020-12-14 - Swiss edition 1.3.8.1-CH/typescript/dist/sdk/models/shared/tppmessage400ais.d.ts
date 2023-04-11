import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode400AISEnum } from "./messagecode400aisenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage400AIS extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes defined for AIS for HTTP Error code 400 (BAD_REQUEST).
     */
    code: MessageCode400AISEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
