import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateANewRequisitionRequestsInput extends SpeakeasyBase {
    requisition?: shared.RequisitionInput;
    requisition1?: shared.RequisitionInput;
    requisition2?: shared.RequisitionInput;
}
export declare class CreateANewRequisitionRequest extends SpeakeasyBase {
    request: CreateANewRequisitionRequestsInput;
}
export declare class CreateANewRequisitionResponse extends SpeakeasyBase {
    contentType: string;
    requisition?: shared.Requisition;
    statusCode: number;
}
