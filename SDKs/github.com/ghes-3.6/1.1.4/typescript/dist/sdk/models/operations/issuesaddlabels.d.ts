import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IssuesAddLabelsRequestBody4 extends SpeakeasyBase {
    name: string;
}
export declare class IssuesAddLabelsRequestBody3Labels extends SpeakeasyBase {
    name: string;
}
export declare class IssuesAddLabelsRequestBody3 extends SpeakeasyBase {
    labels?: IssuesAddLabelsRequestBody3Labels[];
}
export declare class IssuesAddLabelsRequestBody1 extends SpeakeasyBase {
    /**
     * The names of the labels to add to the issue's existing labels. You can pass an empty array to remove all labels. Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key. You can also replace all of the labels for an issue. For more information, see "[Set labels for an issue](https://docs.github.com/enterprise-server@3.6/rest/reference/issues#set-labels-for-an-issue)."
     */
    labels?: string[];
}
export declare class IssuesAddLabelsRequest extends SpeakeasyBase {
    requestBody?: any;
    /**
     * The number that identifies the issue.
     */
    issueNumber: number;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class IssuesAddLabelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Moved permanently
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    labels?: shared.Label[];
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
