import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Family membership info of the user that made the request.
 */
export declare class FamilyInfoMembership extends SpeakeasyBase {
    /**
     * Restrictions on user buying and acquiring content.
     */
    acquirePermission?: string;
    /**
     * The age group of the user.
     */
    ageGroup?: string;
    /**
     * The maximum allowed maturity rating for the user.
     */
    allowedMaturityRating?: string;
    isInFamily?: boolean;
    /**
     * The role of the user in the family.
     */
    role?: string;
}
/**
 * Successful response
 */
export declare class FamilyInfo extends SpeakeasyBase {
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * Family membership info of the user that made the request.
     */
    membership?: FamilyInfoMembership;
}
