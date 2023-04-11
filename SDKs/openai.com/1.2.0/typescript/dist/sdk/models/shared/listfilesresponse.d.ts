import { SpeakeasyBase } from "../../../internal/utils";
import { OpenAIFile } from "./openaifile";
/**
 * OK
 */
export declare class ListFilesResponse extends SpeakeasyBase {
    data: OpenAIFile[];
    object: string;
}
