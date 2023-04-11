import { SpeakeasyBase } from "../../../internal/utils";
export declare class BatchJobInstructionBatchJobInstructionDELETEDELETE extends SpeakeasyBase {
    /**
     * The batch item bases' href
     */
    atHref?: string;
}
/**
 * The batch job instructions' instructions
 */
export declare class BatchJobInstructionBatchJobInstructionDELETE extends SpeakeasyBase {
    delete?: BatchJobInstructionBatchJobInstructionDELETEDELETE[];
}
export declare class BatchJobInstructionBatchJobInstruction extends SpeakeasyBase {
    /**
     * The batch job instructions' holding date
     */
    holdingDate?: Date;
    /**
     * The batch job instructions' instructions
     */
    instructions?: BatchJobInstructionBatchJobInstructionDELETE;
    /**
     * The batch job instructions' validate only
     */
    validateOnly?: boolean;
}
/**
 * The the batch job instruction object.
 */
export declare class BatchJobInstruction extends SpeakeasyBase {
    batchJobInstruction?: BatchJobInstructionBatchJobInstruction;
}
