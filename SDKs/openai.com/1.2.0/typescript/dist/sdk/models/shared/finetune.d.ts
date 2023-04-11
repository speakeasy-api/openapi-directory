import { SpeakeasyBase } from "../../../internal/utils";
import { FineTuneEvent } from "./finetuneevent";
import { OpenAIFile } from "./openaifile";
/**
 * OK
 */
export declare class FineTune extends SpeakeasyBase {
    createdAt: number;
    events?: FineTuneEvent[];
    fineTunedModel: string;
    hyperparams: Record<string, any>;
    id: string;
    model: string;
    object: string;
    organizationId: string;
    resultFiles: OpenAIFile[];
    status: string;
    trainingFiles: OpenAIFile[];
    updatedAt: number;
    validationFiles: OpenAIFile[];
}
