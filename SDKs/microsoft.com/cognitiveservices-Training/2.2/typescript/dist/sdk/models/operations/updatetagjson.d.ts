import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateTagJsonRequest extends SpeakeasyBase {
    /**
     * The updated tag model.
     */
    tagInput: shared.TagInput;
    trainingKey: string;
    /**
     * The project id.
     */
    projectId: string;
    /**
     * The id of the target tag.
     */
    tagId: string;
}
export declare class UpdateTagJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tag?: shared.Tag;
}
