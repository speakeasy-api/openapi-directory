import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode403PISEnum } from "./messagecode403pisenum";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
export declare class TppMessage403PIS extends SpeakeasyBase {
    /**
     * Category of the TPP message category.
     */
    category: TppMessageCategoryEnum;
    /**
     * Message codes defined defined for PIS for PIS for HTTP Error code 403 (FORBIDDEN).
     */
    code: MessageCode403PISEnum;
    path?: string;
    /**
     * Additional explaining text to the TPP.
     */
    text?: string;
}
