import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IssuesSetLabelsRequestBody4 extends SpeakeasyBase {
    name: string;
}
export declare class IssuesSetLabelsRequestBody3Labels extends SpeakeasyBase {
    name: string;
}
export declare class IssuesSetLabelsRequestBody3 extends SpeakeasyBase {
    labels?: IssuesSetLabelsRequestBody3Labels[];
}
export declare class IssuesSetLabelsRequestBody1 extends SpeakeasyBase {
    /**
     * The names of the labels to set for the issue. The labels you set replace any existing labels. You can pass an empty array to remove all labels. Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key. You can also add labels to the existing labels for an issue. For more information, see "[Add labels to an issue](https://docs.github.com/github-ae@latest/rest/reference/issues#add-labels-to-an-issue)."
     */
    labels?: string[];
}
export declare class IssuesSetLabelsRequest extends SpeakeasyBase {
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
export declare class IssuesSetLabelsResponse extends SpeakeasyBase {
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
