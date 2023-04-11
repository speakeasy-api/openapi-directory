import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddDocumentRequest extends SpeakeasyBase {
    addOrUpdateDocumentRequest?: shared.AddOrUpdateDocumentRequest;
    /**
     * Continuous project ID
     */
    projectId: number;
}
export declare class AddDocumentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The newly added continuous project document object.
     */
    continuousProjectDocument?: shared.ContinuousProjectDocument;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
