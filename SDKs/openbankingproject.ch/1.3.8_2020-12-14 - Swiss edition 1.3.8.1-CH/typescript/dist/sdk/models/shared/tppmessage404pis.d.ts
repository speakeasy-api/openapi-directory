import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode404PISEnum } from "./messagecode404pisenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage404PIS extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes defined for PIS for HTTP Error code 404 (NOT FOUND).
     */
    code: MessageCode404PISEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
