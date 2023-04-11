import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSimilarDocumentsWithEnum {
    Preview = "preview",
    Editors = "editors"
}
export declare class GetSimilarDocumentsRequest extends SpeakeasyBase {
    /**
     * Document ID
     */
    documentId: number;
    /**
     * Determines the number of similar documents to return.
     */
    perPage?: number;
    /**
     * Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.
     */
    with?: GetSimilarDocumentsWithEnum[];
}
export declare class GetSimilarDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Document list
     */
    documentList?: shared.DocumentList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
