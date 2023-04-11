import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContinuousProjectFileStringsRequest extends SpeakeasyBase {
    /**
     * Document ID/Name
     */
    documentId: number;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class GetContinuousProjectFileStringsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response for strings and their translations
     */
    stringList?: shared.StringList;
}
