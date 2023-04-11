import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode405AISEnum } from "./messagecode405aisenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage405AIS extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes defined for AIS for HTTP Error code 405 (METHOD NOT ALLOWED).
     */
    code: MessageCode405AISEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
