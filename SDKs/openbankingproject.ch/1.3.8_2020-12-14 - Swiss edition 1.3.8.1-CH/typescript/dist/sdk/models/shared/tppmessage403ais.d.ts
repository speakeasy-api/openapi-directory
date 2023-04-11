import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode403AISEnum } from "./messagecode403aisenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage403AIS extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes defined for AIS for HTTP Error code 403 (FORBIDDEN).
     */
    code: MessageCode403AISEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
