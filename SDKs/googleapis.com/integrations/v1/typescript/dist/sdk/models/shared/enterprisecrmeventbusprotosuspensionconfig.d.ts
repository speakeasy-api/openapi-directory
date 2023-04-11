import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoNotification } from "./enterprisecrmeventbusprotonotification";
import { EnterpriseCrmEventbusProtoSuspensionAuthPermissions } from "./enterprisecrmeventbusprotosuspensionauthpermissions";
import { EnterpriseCrmEventbusProtoSuspensionExpiration } from "./enterprisecrmeventbusprotosuspensionexpiration";
export declare class EnterpriseCrmEventbusProtoSuspensionConfig extends SpeakeasyBase {
    /**
     * Optional information to provide recipients of the suspension in addition to the resolution URL, typically containing relevant parameter values from the originating workflow.
     */
    customMessage?: string;
    notifications?: EnterpriseCrmEventbusProtoNotification[];
    suspensionExpiration?: EnterpriseCrmEventbusProtoSuspensionExpiration;
    /**
     * Identities able to resolve this suspension.
     */
    whoMayResolve?: EnterpriseCrmEventbusProtoSuspensionAuthPermissions[];
}
