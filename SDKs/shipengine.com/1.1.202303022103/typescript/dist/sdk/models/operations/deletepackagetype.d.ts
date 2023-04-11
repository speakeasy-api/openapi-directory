import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeletePackageTypeRequest extends SpeakeasyBase {
    /**
     * Package ID
     */
    packageId: string;
}
export declare class DeletePackageTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request was successful.
     */
    emptyResponseBody?: string;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
}
