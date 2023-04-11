import { SpeakeasyBase } from "../../../internal/utils";
export declare class ThirdPartyJobInstructionThirdPartyJobInstruction extends SpeakeasyBase {
    /**
     * The third party job instructions' employer href
     */
    employerHref?: string;
    /**
     * The third party job instructions' holding date
     */
    holdingDate?: Date;
    /**
     * The third party job instructions' instruction type
     */
    instructionType?: string;
    /**
     * The third party job instructions' meta data
     */
    metaData?: Record<string, any>;
    /**
     * The third party job instructions' pay load
     */
    payLoad?: string;
}
/**
 * The the third party job instruction object.
 */
export declare class ThirdPartyJobInstruction extends SpeakeasyBase {
    thirdPartyJobInstruction?: ThirdPartyJobInstructionThirdPartyJobInstruction;
}
