import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateEditRequest extends SpeakeasyBase {
    /**
     * The input text to use as a starting point for the edit.
     */
    input?: string;
    /**
     * The instruction that tells the model how to edit the prompt.
     */
    instruction: string;
    /**
     * ID of the model to use. You can use the `text-davinci-edit-001` or `code-davinci-edit-001` model with this endpoint.
     */
    model: string;
    /**
     * How many edits to generate for the input and instruction.
     */
    n?: number;
    /**
     * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
     *
     * @remarks
     *
     * We generally recommend altering this or `top_p` but not both.
     *
     */
    temperature?: number;
    /**
     * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
     *
     * @remarks
     *
     * We generally recommend altering this or `temperature` but not both.
     *
     */
    topP?: number;
}
