import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The user role to assign to a user for the entity.
 */
export declare enum AssignedUserRoleUserRoleEnum {
    UserRoleUnspecified = "USER_ROLE_UNSPECIFIED",
    Admin = "ADMIN",
    AdminPartnerClient = "ADMIN_PARTNER_CLIENT",
    Standard = "STANDARD",
    StandardPlanner = "STANDARD_PLANNER",
    StandardPlannerLimited = "STANDARD_PLANNER_LIMITED",
    StandardPartnerClient = "STANDARD_PARTNER_CLIENT",
    ReadOnly = "READ_ONLY",
    ReportingOnly = "REPORTING_ONLY",
    LimitedReportingOnly = "LIMITED_REPORTING_ONLY",
    Creative = "CREATIVE",
    CreativeAdmin = "CREATIVE_ADMIN"
}
/**
 * A single assigned user role, which defines a user's authorized interaction with a specified partner or advertiser.
 */
export declare class AssignedUserRoleInput extends SpeakeasyBase {
    /**
     * The ID of the advertiser that the assigend user role applies to.
     */
    advertiserId?: string;
    /**
     * The ID of the partner that the assigned user role applies to.
     */
    partnerId?: string;
    /**
     * Required. The user role to assign to a user for the entity.
     */
    userRole?: AssignedUserRoleUserRoleEnum;
}
/**
 * A single assigned user role, which defines a user's authorized interaction with a specified partner or advertiser.
 */
export declare class AssignedUserRole extends SpeakeasyBase {
    /**
     * The ID of the advertiser that the assigend user role applies to.
     */
    advertiserId?: string;
    /**
     * Output only. The ID of the assigned user role.
     */
    assignedUserRoleId?: string;
    /**
     * The ID of the partner that the assigned user role applies to.
     */
    partnerId?: string;
    /**
     * Required. The user role to assign to a user for the entity.
     */
    userRole?: AssignedUserRoleUserRoleEnum;
}
