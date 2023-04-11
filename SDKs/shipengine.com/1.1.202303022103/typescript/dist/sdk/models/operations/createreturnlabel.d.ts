import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateReturnLabelRequest extends SpeakeasyBase {
    createReturnLabelRequestBody: shared.CreateReturnLabelRequestBody;
    /**
     * Label ID
     */
    labelId: string;
}
export declare class CreateReturnLabelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request was a success.
     */
    createReturnLabelResponseBody?: shared.CreateReturnLabelResponseBodyOutput;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
}
