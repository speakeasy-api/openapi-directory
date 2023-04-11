import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActivityMarkThreadAsReadRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the pull request thread.
     */
    threadId: number;
}
export declare class ActivityMarkThreadAsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
}
