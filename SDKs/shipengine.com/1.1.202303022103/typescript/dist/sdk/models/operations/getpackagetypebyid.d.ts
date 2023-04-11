import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPackageTypeByIdRequest extends SpeakeasyBase {
    /**
     * Package ID
     */
    packageId: string;
}
export declare class GetPackageTypeByIdResponse extends SpeakeasyBase {
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
    getPackageTypeByIdResponseBody?: shared.GetPackageTypeByIdResponseBody;
}
