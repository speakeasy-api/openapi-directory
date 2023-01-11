import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateReturnLabelPathParams extends SpeakeasyBase {
    labelId: string;
}
export declare class CreateReturnLabelRequest extends SpeakeasyBase {
    pathParams: CreateReturnLabelPathParams;
    request: shared.CreateReturnLabelRequestBody;
}
export declare class CreateReturnLabelResponseOutput extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createReturnLabelResponseBody?: shared.CreateReturnLabelResponseBodyOutput;
    errorResponseBody?: shared.ErrorResponseBody;
}
