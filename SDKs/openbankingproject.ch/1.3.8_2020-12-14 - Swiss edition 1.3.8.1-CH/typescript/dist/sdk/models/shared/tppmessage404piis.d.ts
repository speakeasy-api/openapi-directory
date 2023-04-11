import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode404PIISEnum } from "./messagecode404piisenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage404PIIS extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes defined for PIIS for HTTP Error code 404 (NOT FOUND).
     */
    code: MessageCode404PIISEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
