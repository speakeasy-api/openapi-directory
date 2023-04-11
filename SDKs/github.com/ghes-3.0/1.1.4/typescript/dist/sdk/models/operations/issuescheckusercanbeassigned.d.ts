import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IssuesCheckUserCanBeAssignedRequest extends SpeakeasyBase {
    assignee: string;
    owner: string;
    repo: string;
}
export declare class IssuesCheckUserCanBeAssignedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Otherwise a `404` status code is returned.
     */
    basicError?: shared.BasicError;
}
