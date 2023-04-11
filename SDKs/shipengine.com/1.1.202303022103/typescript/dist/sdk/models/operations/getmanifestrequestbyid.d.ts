import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetManifestRequestByIdRequest extends SpeakeasyBase {
    /**
     * The Manifest Request Id
     */
    manifestRequestId: string;
}
export declare class GetManifestRequestByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request was a success.
     */
    createManifestResponseBody?: shared.CreateManifestResponseBody;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
}
