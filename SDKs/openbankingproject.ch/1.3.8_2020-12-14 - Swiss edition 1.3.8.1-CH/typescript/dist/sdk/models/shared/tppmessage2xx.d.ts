import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode2XXEnum } from "./messagecode2xxenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage2XX extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes for HTTP Error codes 2XX.
     */
    code: MessageCode2XXEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
