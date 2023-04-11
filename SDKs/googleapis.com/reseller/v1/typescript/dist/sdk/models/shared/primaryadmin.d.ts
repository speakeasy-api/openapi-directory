import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON template for primary admin in case of TEAM customers
 */
export declare class PrimaryAdmin extends SpeakeasyBase {
    /**
     * The business email of the primary administrator of the customer. The email verification link is sent to this email address at the time of customer creation. Primary administrators have access to the customer's Admin Console, including the ability to invite and evict users and manage the administrative needs of the customer.
     */
    primaryEmail?: string;
}
