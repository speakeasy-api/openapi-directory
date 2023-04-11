import { SpeakeasyBase } from "../../../internal/utils";
import { FromProperty } from "./fromproperty";
import { MessageProperty } from "./messageproperty";
import { ToProperty } from "./toproperty";
/**
 * Send Message
 */
export declare class SendMessage extends SpeakeasyBase {
    from: FromProperty;
    message: MessageProperty;
    to: ToProperty;
}
