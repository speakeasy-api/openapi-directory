import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLabelByExternalShipmentIdPathParams extends SpeakeasyBase {
    externalShipmentId: string;
}
export declare class GetLabelByExternalShipmentIdQueryParams extends SpeakeasyBase {
    labelDownloadType?: shared.LabelDownloadTypeEnum;
}
export declare class GetLabelByExternalShipmentIdRequest extends SpeakeasyBase {
    pathParams: GetLabelByExternalShipmentIdPathParams;
    queryParams: GetLabelByExternalShipmentIdQueryParams;
}
export declare class GetLabelByExternalShipmentIdResponseOutput extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    getLabelByExternalShipmentIdResponseBody?: shared.GetLabelByExternalShipmentIdResponseBodyOutput;
}
