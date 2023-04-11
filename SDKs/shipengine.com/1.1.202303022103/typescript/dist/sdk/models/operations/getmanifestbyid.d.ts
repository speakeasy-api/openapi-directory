import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetManifestByIdRequest extends SpeakeasyBase {
    /**
     * The Manifest Id
     */
    manifestId: string;
}
export declare class GetManifestByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
    /**
     * The request was a success.
     */
    getManifestByIdResponseBody?: shared.GetManifestByIdResponseBody;
}
