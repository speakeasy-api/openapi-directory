import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether the card authorization should be approved or declined.
 */
export declare enum ActionARealTimeDecisionParametersCardAuthorizationDecisionEnum {
    Approve = "approve",
    Decline = "decline"
}
/**
 * If the Real-Time Decision relates to a card authorization attempt, this object contains your response to the authorization.
 */
export declare class ActionARealTimeDecisionParametersCardAuthorization extends SpeakeasyBase {
    /**
     * Whether the card authorization should be approved or declined.
     */
    decision: ActionARealTimeDecisionParametersCardAuthorizationDecisionEnum;
}
/**
 * Whether your application was able to deliver the one-time passcode.
 */
export declare enum ActionARealTimeDecisionParametersDigitalWalletAuthenticationResultEnum {
    Success = "success",
    Failure = "failure"
}
/**
 * If the Real-Time Decision relates to a digital wallet authentication attempt, this object contains your response to the authentication.
 */
export declare class ActionARealTimeDecisionParametersDigitalWalletAuthentication extends SpeakeasyBase {
    /**
     * Whether your application was able to deliver the one-time passcode.
     */
    result: ActionARealTimeDecisionParametersDigitalWalletAuthenticationResultEnum;
}
/**
 * If your application approves the provisioning attempt, this contains metadata about the digital wallet token that will be generated.
 */
export declare class ActionARealTimeDecisionParametersDigitalWalletTokenApproval extends SpeakeasyBase {
    /**
     * The identifier of the Card Profile to assign to the Digital Wallet token.
     */
    cardProfileId: string;
    /**
     * An email address that can be used to verify the cardholder via one-time passcode.
     */
    email?: string;
    /**
     * A phone number that can be used to verify the cardholder via one-time passcode over SMS.
     */
    phone?: string;
}
/**
 * If your application declines the provisioning attempt, this contains details about the decline.
 */
export declare class ActionARealTimeDecisionParametersDigitalWalletTokenDecline extends SpeakeasyBase {
    /**
     * Why the tokenization attempt was declined. This is for logging purposes only and is not displayed to the end-user.
     */
    reason?: string;
}
/**
 * If the Real-Time Decision relates to a digital wallet token provisioning attempt, this object contains your response to the attempt.
 */
export declare class ActionARealTimeDecisionParametersDigitalWalletToken extends SpeakeasyBase {
    /**
     * If your application approves the provisioning attempt, this contains metadata about the digital wallet token that will be generated.
     */
    approval?: ActionARealTimeDecisionParametersDigitalWalletTokenApproval;
    /**
     * If your application declines the provisioning attempt, this contains details about the decline.
     */
    decline?: ActionARealTimeDecisionParametersDigitalWalletTokenDecline;
}
export declare class ActionARealTimeDecisionParameters extends SpeakeasyBase {
    /**
     * If the Real-Time Decision relates to a card authorization attempt, this object contains your response to the authorization.
     */
    cardAuthorization?: ActionARealTimeDecisionParametersCardAuthorization;
    /**
     * If the Real-Time Decision relates to a digital wallet authentication attempt, this object contains your response to the authentication.
     */
    digitalWalletAuthentication?: ActionARealTimeDecisionParametersDigitalWalletAuthentication;
    /**
     * If the Real-Time Decision relates to a digital wallet token provisioning attempt, this object contains your response to the attempt.
     */
    digitalWalletToken?: ActionARealTimeDecisionParametersDigitalWalletToken;
}
