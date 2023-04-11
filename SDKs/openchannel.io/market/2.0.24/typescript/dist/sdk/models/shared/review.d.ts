import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { User } from "./user";
import { UserAccount } from "./useraccount";
/**
 * A Review
 */
export declare class Review extends SpeakeasyBase {
    /**
     * The Id of the App that owns this review
     */
    appId: string;
    /**
     * A custom JSON object that you can create and attach to this record
     */
    customData: string;
    /**
     * The review's description. Limited to 2000 characters.
     */
    description: string;
    /**
     * The review's headline. Limited to 50 characters.
     */
    headline: string;
    /**
     * The rating given within this review. The rating is represented as an integer between 100 and 500 (1 - 5 stars)
     */
    rating: number;
    /**
     * The date (in millis) this Review was posted
     */
    reportDate: number;
    /**
     * The id for this review.
     */
    reviewId: string;
    /**
     * The current status of this review
     */
    status: Status;
    /**
     * The type for this review
     */
    type?: string;
    /**
     * A User
     */
    user?: User;
    /**
     * A User Account
     */
    userAccount?: UserAccount;
    /**
     * The id of the user account that posted this review
     */
    userAccountId?: string;
    /**
     * The id of the User that posted this review
     */
    userId: string;
}
