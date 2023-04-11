import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If the simulated tokenization attempt was declined, this field contains details as to why.
 */
export declare enum InboundDigitalWalletTokenRequestSimulationResultDeclineReasonEnum {
    CardNotActive = "card_not_active",
    NoVerificationMethod = "no_verification_method",
    WebhookTimedOut = "webhook_timed_out",
    WebhookDeclined = "webhook_declined"
}
/**
 * A constant representing the object's type. For this resource it will always be `inbound_digital_wallet_token_request_simulation_result`.
 */
export declare enum InboundDigitalWalletTokenRequestSimulationResultTypeEnum {
    InboundDigitalWalletTokenRequestSimulationResult = "inbound_digital_wallet_token_request_simulation_result"
}
/**
 * The results of a Digital Wallet Token simulation.
 */
export declare class InboundDigitalWalletTokenRequestSimulationResult extends SpeakeasyBase {
    /**
     * If the simulated tokenization attempt was declined, this field contains details as to why.
     */
    declineReason: InboundDigitalWalletTokenRequestSimulationResultDeclineReasonEnum;
    /**
     * If the simulated tokenization attempt was accepted, this field contains the id of the Digital Wallet Token that was created.
     */
    digitalWalletTokenId: string;
    /**
     * A constant representing the object's type. For this resource it will always be `inbound_digital_wallet_token_request_simulation_result`.
     */
    type: InboundDigitalWalletTokenRequestSimulationResultTypeEnum;
}
