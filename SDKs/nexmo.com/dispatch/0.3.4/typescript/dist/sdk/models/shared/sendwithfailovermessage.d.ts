import { SpeakeasyBase } from "../../../internal/utils";
import { FailoverProperty } from "./failoverproperty";
import { FromProperty } from "./fromproperty";
import { MessageProperty } from "./messageproperty";
import { ToProperty } from "./toproperty";
/**
 * Send With Failover Message
 */
export declare class SendWithFailoverMessage extends SpeakeasyBase {
    /**
     * Please note that last message does not have failover attribute inside it. All other messages must contain a failover attribute.
     */
    failover?: FailoverProperty;
    from: FromProperty;
    message: MessageProperty;
    to: ToProperty;
}
