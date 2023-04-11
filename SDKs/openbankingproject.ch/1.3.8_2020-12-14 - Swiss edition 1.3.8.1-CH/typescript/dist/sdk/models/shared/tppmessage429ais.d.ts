import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode429AISEnum } from "./messagecode429aisenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage429AIS extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes for HTTP Error code 429 (TOO MANY REQUESTS).
     */
    code: MessageCode429AISEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
