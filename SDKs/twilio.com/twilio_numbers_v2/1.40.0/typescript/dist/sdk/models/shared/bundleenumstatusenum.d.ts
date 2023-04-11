/**
 * The verification status of the Bundle resource. Please refer to [Bundle Statuses](https://www.twilio.com/docs/phone-numbers/regulatory/api/bundles#bundle-statuses) for more details.
 */
export declare enum BundleEnumStatusEnum {
    Draft = "draft",
    PendingReview = "pending-review",
    InReview = "in-review",
    TwilioRejected = "twilio-rejected",
    TwilioApproved = "twilio-approved",
    ProvisionallyApproved = "provisionally-approved"
}
