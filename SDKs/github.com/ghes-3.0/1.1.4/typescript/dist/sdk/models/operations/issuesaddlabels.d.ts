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
     * The names of the labels to add to the issue's existing labels. You can pass an empty array to remove all labels. Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key. You can also replace all of the labels for an issue. For more information, see "[Set labels for an issue](https://docs.github.com/enterprise-server@3.0/rest/reference/issues#set-labels-for-an-issue)."
     */
    labels?: string[];
}
export declare class IssuesAddLabelsRequest extends SpeakeasyBase {
    requestBody?: any;
    /**
     * issue_number parameter
     */
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesAddLabelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Gone
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    labels?: shared.Label[];
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
