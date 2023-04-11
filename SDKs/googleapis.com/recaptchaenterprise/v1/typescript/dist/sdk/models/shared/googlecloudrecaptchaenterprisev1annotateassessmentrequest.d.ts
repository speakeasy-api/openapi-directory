import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1TransactionEvent } from "./googlecloudrecaptchaenterprisev1transactionevent";
/**
 * Optional. The annotation that will be assigned to the Event. This field can be left empty to provide reasons that apply to an event without concluding whether the event is legitimate or fraudulent.
 */
export declare enum GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum {
    AnnotationUnspecified = "ANNOTATION_UNSPECIFIED",
    Legitimate = "LEGITIMATE",
    Fraudulent = "FRAUDULENT",
    PasswordCorrect = "PASSWORD_CORRECT",
    PasswordIncorrect = "PASSWORD_INCORRECT"
}
export declare enum GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum {
    ReasonUnspecified = "REASON_UNSPECIFIED",
    Chargeback = "CHARGEBACK",
    ChargebackFraud = "CHARGEBACK_FRAUD",
    ChargebackDispute = "CHARGEBACK_DISPUTE",
    Refund = "REFUND",
    RefundFraud = "REFUND_FRAUD",
    TransactionAccepted = "TRANSACTION_ACCEPTED",
    TransactionDeclined = "TRANSACTION_DECLINED",
    PaymentHeuristics = "PAYMENT_HEURISTICS",
    InitiatedTwoFactor = "INITIATED_TWO_FACTOR",
    PassedTwoFactor = "PASSED_TWO_FACTOR",
    FailedTwoFactor = "FAILED_TWO_FACTOR",
    CorrectPassword = "CORRECT_PASSWORD",
    IncorrectPassword = "INCORRECT_PASSWORD",
    SocialSpam = "SOCIAL_SPAM"
}
/**
 * The request message to annotate an Assessment.
 */
export declare class GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest extends SpeakeasyBase {
    /**
     * Optional. The annotation that will be assigned to the Event. This field can be left empty to provide reasons that apply to an event without concluding whether the event is legitimate or fraudulent.
     */
    annotation?: GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum;
    /**
     * Optional. Unique stable hashed user identifier to apply to the assessment. This is an alternative to setting the hashed_account_id in CreateAssessment, for example when the account identifier is not yet known in the initial request. It is recommended that the identifier is hashed using hmac-sha256 with stable secret.
     */
    hashedAccountId?: string;
    /**
     * Optional. Optional reasons for the annotation that will be assigned to the Event.
     */
    reasons?: GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum[];
    /**
     * Describes an event in the lifecycle of a payment transaction.
     */
    transactionEvent?: GoogleCloudRecaptchaenterpriseV1TransactionEvent;
}
