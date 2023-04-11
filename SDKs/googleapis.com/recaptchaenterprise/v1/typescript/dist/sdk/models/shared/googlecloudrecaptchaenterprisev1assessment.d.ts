import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment } from "./googlecloudrecaptchaenterprisev1accountdefenderassessment";
import { GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo, GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput } from "./googlecloudrecaptchaenterprisev1accountverificationinfo";
import { GoogleCloudRecaptchaenterpriseV1Event } from "./googlecloudrecaptchaenterprisev1event";
import { GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment } from "./googlecloudrecaptchaenterprisev1firewallpolicyassessment";
import { GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment } from "./googlecloudrecaptchaenterprisev1fraudpreventionassessment";
import { GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification, GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput } from "./googlecloudrecaptchaenterprisev1privatepasswordleakverification";
import { GoogleCloudRecaptchaenterpriseV1RiskAnalysis } from "./googlecloudrecaptchaenterprisev1riskanalysis";
import { GoogleCloudRecaptchaenterpriseV1TokenProperties } from "./googlecloudrecaptchaenterprisev1tokenproperties";
/**
 * A reCAPTCHA Enterprise assessment resource.
 */
export declare class GoogleCloudRecaptchaenterpriseV1AssessmentInput extends SpeakeasyBase {
    /**
     * Account defender risk assessment.
     */
    accountDefenderAssessment?: GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment;
    /**
     * Information about account verification, used for identity verification.
     */
    accountVerification?: GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput;
    /**
     * The event being assessed.
     */
    event?: GoogleCloudRecaptchaenterpriseV1Event;
    /**
     * Policy config assessment.
     */
    firewallPolicyAssessment?: GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment;
    /**
     * Assessment for Fraud Prevention.
     */
    fraudPreventionAssessment?: GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment;
    /**
     * Private password leak verification info.
     */
    privatePasswordLeakVerification?: GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput;
    /**
     * Risk analysis result for an event.
     */
    riskAnalysis?: GoogleCloudRecaptchaenterpriseV1RiskAnalysis;
    /**
     * Properties of the provided event token.
     */
    tokenProperties?: GoogleCloudRecaptchaenterpriseV1TokenProperties;
}
/**
 * A reCAPTCHA Enterprise assessment resource.
 */
export declare class GoogleCloudRecaptchaenterpriseV1Assessment extends SpeakeasyBase {
    /**
     * Account defender risk assessment.
     */
    accountDefenderAssessment?: GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment;
    /**
     * Information about account verification, used for identity verification.
     */
    accountVerification?: GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo;
    /**
     * The event being assessed.
     */
    event?: GoogleCloudRecaptchaenterpriseV1Event;
    /**
     * Policy config assessment.
     */
    firewallPolicyAssessment?: GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment;
    /**
     * Assessment for Fraud Prevention.
     */
    fraudPreventionAssessment?: GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment;
    /**
     * Output only. The resource name for the Assessment in the format "projects/{project}/assessments/{assessment}".
     */
    name?: string;
    /**
     * Private password leak verification info.
     */
    privatePasswordLeakVerification?: GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification;
    /**
     * Risk analysis result for an event.
     */
    riskAnalysis?: GoogleCloudRecaptchaenterpriseV1RiskAnalysis;
    /**
     * Properties of the provided event token.
     */
    tokenProperties?: GoogleCloudRecaptchaenterpriseV1TokenProperties;
}
