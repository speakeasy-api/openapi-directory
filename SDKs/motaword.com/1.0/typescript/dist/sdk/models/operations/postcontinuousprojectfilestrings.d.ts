import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostContinuousProjectFileStringsRequest extends SpeakeasyBase {
    continuousProjectDocumentStringsBody?: shared.ContinuousProjectDocumentStringsBody;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class PostContinuousProjectFileStringsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response for strings and their translations
     */
    stringList?: shared.StringList;
}
