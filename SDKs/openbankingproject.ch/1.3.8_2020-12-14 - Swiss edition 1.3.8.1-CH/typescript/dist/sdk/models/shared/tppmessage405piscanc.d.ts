import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode405PISCANCEnum } from "./messagecode405piscancenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage405PISCANC extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes defined for payment cancelations PIS for HTTP Error code 405 (METHOD NOT ALLOWED).
     */
    code: MessageCode405PISCANCEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
