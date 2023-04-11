import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateTagRawRequest extends SpeakeasyBase {
    /**
     * The updated tag model.
     */
    requestBody: Uint8Array;
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
export declare class UpdateTagRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tag?: shared.Tag;
}
