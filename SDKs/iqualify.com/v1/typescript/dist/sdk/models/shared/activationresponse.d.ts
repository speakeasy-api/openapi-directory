import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActivationResponseMetadata extends SpeakeasyBase {
    rootContentId?: string;
}
/**
 * Activation list.
 */
export declare class ActivationResponse extends SpeakeasyBase {
    end?: string;
    id?: string;
    info?: string;
    /**
     * number of learners in the offering, excluding facilitators and coaches
     */
    learnersCount?: string;
    metadata?: ActivationResponseMetadata;
    name?: string;
    start?: string;
}
