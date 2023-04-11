/**
 * * active - active subscription, either trial or paying
 *
 * @remarks
 * * trial_ended - trial ended and subscription was discontinued
 * * canceled - subscription canceled
 *
 */
export declare enum AccountStatusEnum {
    Active = "active",
    TrialEnded = "trial_ended",
    Canceled = "canceled"
}
