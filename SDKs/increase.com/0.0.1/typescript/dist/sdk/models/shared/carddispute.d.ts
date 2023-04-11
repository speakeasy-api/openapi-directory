import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If the Card Dispute's status is `accepted`, this will contain details of the successful dispute.
 */
export declare class CardDisputeCardDisputeAcceptance extends SpeakeasyBase {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the Card Dispute was accepted.
     */
    acceptedAt: Date;
    /**
     * The identifier of the Card Dispute that was accepted.
     */
    cardDisputeId: string;
    /**
     * The identifier of the Transaction that was created to return the disputed funds to your account.
     */
    transactionId: string;
}
/**
 * If the Card Dispute's status is `rejected`, this will contain details of the unsuccessful dispute.
 */
export declare class CardDisputeCardDisputeRejection extends SpeakeasyBase {
    /**
     * The identifier of the Card Dispute that was rejected.
     */
    cardDisputeId: string;
    /**
     * Why the Card Dispute was rejected.
     */
    explanation: string;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the Card Dispute was rejected.
     */
    rejectedAt: Date;
}
/**
 * The results of the Dispute investigation.
 */
export declare enum CardDisputeStatusEnum {
    PendingReviewing = "pending_reviewing",
    Accepted = "accepted",
    Rejected = "rejected"
}
/**
 * A constant representing the object's type. For this resource it will always be `card_dispute`.
 */
export declare enum CardDisputeTypeEnum {
    CardDispute = "card_dispute"
}
/**
 * If unauthorized activity occurs on a card, you can create a Card Dispute and we'll return the funds if appropriate.
 */
export declare class CardDispute extends SpeakeasyBase {
    /**
     * If the Card Dispute's status is `accepted`, this will contain details of the successful dispute.
     */
    acceptance: CardDisputeCardDisputeAcceptance;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the Card Dispute was created.
     */
    createdAt: Date;
    /**
     * The identifier of the Transaction that was disputed.
     */
    disputedTransactionId: string;
    /**
     * Why you disputed the Transaction in question.
     */
    explanation: string;
    /**
     * The Card Dispute identifier.
     */
    id: string;
    /**
     * If the Card Dispute's status is `rejected`, this will contain details of the unsuccessful dispute.
     */
    rejection: CardDisputeCardDisputeRejection;
    /**
     * The results of the Dispute investigation.
     */
    status: CardDisputeStatusEnum;
    /**
     * A constant representing the object's type. For this resource it will always be `card_dispute`.
     */
    type: CardDisputeTypeEnum;
}
