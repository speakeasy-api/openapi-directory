import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLabelByIdPathParams extends SpeakeasyBase {
    labelId: string;
}
export declare class GetLabelByIdQueryParams extends SpeakeasyBase {
    labelDownloadType?: shared.LabelDownloadTypeEnum;
}
export declare class GetLabelByIdRequest extends SpeakeasyBase {
    pathParams: GetLabelByIdPathParams;
    queryParams: GetLabelByIdQueryParams;
}
export declare class GetLabelByIdResponseOutput extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    getLabelByIdResponseBody?: shared.GetLabelByIdResponseBodyOutput;
}
