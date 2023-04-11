import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Instruction } from "./googleclouddatalabelingv1beta1instruction";
/**
 * Request message for CreateInstruction.
 */
export declare class GoogleCloudDatalabelingV1beta1CreateInstructionRequest extends SpeakeasyBase {
    /**
     * Instruction of how to perform the labeling task for human operators. Currently only PDF instruction is supported.
     */
    instruction?: GoogleCloudDatalabelingV1beta1Instruction;
}
