import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetProjectDocumentsWithEnum {
    Preview = "preview",
    Editors = "editors"
}
export declare class GetProjectDocumentsRequest extends SpeakeasyBase {
    /**
     * Project ID
     */
    projectId: number;
    /**
     * Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.
     */
    with?: GetProjectDocumentsWithEnum[];
}
export declare class GetProjectDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A list of document models
     */
    documentList?: shared.DocumentList;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
