import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Used to override the default challenge presented to the payee when they onboard</p>
 *
 * @remarks
 * <p>Not used after the payee has onboarded</p>
 *
 */
export declare class ChallengeV4 extends SpeakeasyBase {
    description: string;
    /**
     * The value that the user will be asked to verify when they onboard
     */
    value: string;
}
