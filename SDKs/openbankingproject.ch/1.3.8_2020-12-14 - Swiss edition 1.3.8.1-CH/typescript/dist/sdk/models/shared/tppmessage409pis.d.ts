import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode409PISEnum } from "./messagecode409pisenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage409PIS extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes defined for PIS for HTTP Error code 409 (CONFLICT).
     */
    code: MessageCode409PISEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
