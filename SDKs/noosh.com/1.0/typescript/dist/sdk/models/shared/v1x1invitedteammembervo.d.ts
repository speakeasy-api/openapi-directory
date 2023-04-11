import { SpeakeasyBase } from "../../../internal/utils";
import { RoleSimpleVO } from "./rolesimplevo";
import { UserPersonVO } from "./userpersonvo";
/**
 * Java type: com.noosh.nooshapi.vo.v1x1.V1x1InvitedTeamMemberVO
 */
export declare class V1x1InvitedTeamMemberVO extends SpeakeasyBase {
    /**
     * Java type: com.noosh.nooshapi.vo.RoleSimpleVO
     */
    role?: RoleSimpleVO;
    teamMemberId?: number;
    /**
     * Java type: com.noosh.nooshapi.vo.UserPersonVO
     */
    user?: UserPersonVO;
    wasInvitedBefore?: boolean;
}
