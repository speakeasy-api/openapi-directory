import { SpeakeasyBase } from "../../../internal/utils";
import { App } from "./app";
import { Developer } from "./developer";
import { Ownership } from "./ownership";
import { Review } from "./review";
import { Transaction } from "./transaction";
import { User } from "./user";
/**
 * The current event type
 */
export declare enum EventEventTypeEnum {
    AppSubmitted = "app.submitted",
    AppApproved = "app.approved",
    AppSuspended = "app.suspended",
    AppUnsuspended = "app.unsuspended",
    AppRejected = "app.rejected",
    AppInReview = "app.inReview",
    AppInstalled = "app.installed",
    AppUninstalled = "app.uninstalled",
    ReviewCreated = "review.created",
    ReviewUpdated = "review.updated",
    ReviewApproved = "review.approved",
    ReviewSpam = "review.spam",
    ReviewRemoved = "review.removed",
    UserCreated = "user.created",
    UserUpdated = "user.updated",
    UserRemoved = "user.removed",
    UserInvalidPaymentDetails = "user.invalidPaymentDetails",
    UserPaymentDetailsRequired = "user.paymentDetailsRequired",
    DeveloperCreated = "developer.created",
    DeveloperUpdated = "developer.updated",
    DeveloperRemoved = "developer.removed",
    DeveloperPaymentDetailsRequired = "developer.paymentDetailsRequired",
    PermissionAdded = "permission.added",
    PermissionRemoved = "permission.removed",
    PaymentComplete = "payment.complete",
    PaymentRefunded = "payment.refunded",
    PaymentRequired = "payment.required",
    OwnershipExpired = "ownership.expired"
}
/**
 * OK
 */
export declare class Event extends SpeakeasyBase {
    /**
     * An app
     */
    app?: App;
    /**
     * The date (in millis) of when this event occurred
     */
    createdDate: number;
    /**
     * A description of the event
     */
    description?: string;
    /**
     * A Developer
     */
    developer?: Developer;
    /**
     * The id of the event
     */
    eventId: string;
    /**
     * The current event type
     */
    eventType: EventEventTypeEnum;
    /**
     * The id of the marketplace that owns this event
     */
    marketplaceId: string;
    ownership?: Ownership;
    /**
     * A Review
     */
    review?: Review;
    /**
     * A transaction for an app initiated by a user
     */
    transaction?: Transaction;
    /**
     * A User
     */
    user?: User;
}
