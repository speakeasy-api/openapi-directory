import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateFileRequestFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class CreateFileRequest extends SpeakeasyBase {
    /**
     * Name of the [JSON Lines](https://jsonlines.readthedocs.io/en/latest/) file to be uploaded.
     *
     * @remarks
     *
     * If the `purpose` is set to "fine-tune", each line is a JSON record with "prompt" and "completion" fields representing your [training examples](/docs/guides/fine-tuning/prepare-training-data).
     *
     */
    file: CreateFileRequestFile;
    /**
     * The intended purpose of the uploaded documents.
     *
     * @remarks
     *
     * Use "fine-tune" for [Fine-tuning](/docs/api-reference/fine-tunes). This allows us to validate the format of the uploaded file.
     *
     */
    purpose: string;
}
