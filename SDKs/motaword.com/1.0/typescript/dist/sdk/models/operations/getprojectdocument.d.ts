import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetProjectDocumentWithEnum {
    Preview = "preview",
    Editors = "editors"
}
export declare class GetProjectDocumentRequest extends SpeakeasyBase {
    /**
     * Document ID
     */
    documentId: number;
    /**
     * Project ID
     */
    projectId: number;
    /**
     * Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.
     */
    with?: GetProjectDocumentWithEnum[];
}
export declare class GetProjectDocumentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Document model
     */
    document?: shared.Document;
    /**
     * DocumentNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
