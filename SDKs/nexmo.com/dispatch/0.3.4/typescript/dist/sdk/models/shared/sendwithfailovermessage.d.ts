import { SpeakeasyBase } from "../../../internal/utils";
import { FailoverProperty } from "./failoverproperty";
import { FromProperty } from "./fromproperty";
import { MessageProperty } from "./messageproperty";
import { ToProperty } from "./toproperty";
/**
 * Send With Failover Message
**/
export declare class SendWithFailoverMessage extends SpeakeasyBase {
    failover?: FailoverProperty;
    from: FromProperty;
    message: MessageProperty;
    to: ToProperty;
}
