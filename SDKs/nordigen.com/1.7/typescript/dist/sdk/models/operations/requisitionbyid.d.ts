import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequisitionByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class RequisitionByIdRequest extends SpeakeasyBase {
    pathParams: RequisitionByIdPathParams;
}
export declare class RequisitionByIdResponse extends SpeakeasyBase {
    contentType: string;
    requisition?: shared.Requisition;
    statusCode: number;
}
