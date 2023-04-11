import { SpeakeasyBase } from "../../../internal/utils";
import { AutomaticInvitationVO } from "./automaticinvitationvo";
/**
 * Java type: com.noosh.nooshapi.vo.AutomaticInvitationsListVO
 */
export declare class AutomaticInvitationsListVO extends SpeakeasyBase {
    results?: AutomaticInvitationVO[];
    statusCode?: number;
    statusReason?: string;
}
