import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAspspAuthorizationLinkPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CreateAspspAuthorizationLinkRequests extends SpeakeasyBase {
    requisitionLinkParams?: shared.RequisitionLinkParams;
    requisitionLinkParams1?: shared.RequisitionLinkParams;
    requisitionLinkParams2?: shared.RequisitionLinkParams;
}
export declare class CreateAspspAuthorizationLinkRequest extends SpeakeasyBase {
    pathParams: CreateAspspAuthorizationLinkPathParams;
    request: CreateAspspAuthorizationLinkRequests;
}
export declare class CreateAspspAuthorizationLinkResponse extends SpeakeasyBase {
    contentType: string;
    requisitionLinks?: shared.RequisitionLinks;
    statusCode: number;
}
