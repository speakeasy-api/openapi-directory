import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBlobMetadataByIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier
     */
    id: string;
}
export declare class GetBlobMetadataByIdResponse extends SpeakeasyBase {
    /**
     * A JSON object containing the blob
     */
    blob?: shared.Blob;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
