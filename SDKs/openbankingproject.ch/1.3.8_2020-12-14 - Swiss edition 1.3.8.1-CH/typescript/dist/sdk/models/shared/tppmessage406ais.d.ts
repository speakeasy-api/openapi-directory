import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode406AISEnum } from "./messagecode406aisenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage406AIS extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes defined for AIS for HTTP Error code 406 (NOT ACCEPTABLE).
     */
    code: MessageCode406AISEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
