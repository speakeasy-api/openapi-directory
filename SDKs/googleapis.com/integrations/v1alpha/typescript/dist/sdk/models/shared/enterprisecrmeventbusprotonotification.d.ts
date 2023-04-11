import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoAddress } from "./enterprisecrmeventbusprotoaddress";
import { EnterpriseCrmEventbusProtoBuganizerNotification } from "./enterprisecrmeventbusprotobuganizernotification";
import { EnterpriseCrmEventbusProtoCustomSuspensionRequest } from "./enterprisecrmeventbusprotocustomsuspensionrequest";
export declare class EnterpriseCrmEventbusProtoNotification extends SpeakeasyBase {
    buganizerNotification?: EnterpriseCrmEventbusProtoBuganizerNotification;
    /**
     * Email address along with optional name and tokens. These tokens will be substituted for the variables in the form of [{var_name}], where var_name could be any string of no more than 32 bytes.
     */
    emailAddress?: EnterpriseCrmEventbusProtoAddress;
    escalatorQueue?: string;
    pubsubTopic?: string;
    request?: EnterpriseCrmEventbusProtoCustomSuspensionRequest;
}
