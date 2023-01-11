import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAspspAuthorizationLinkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CreateAspspAuthorizationLinkRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requisitionLinkParams?: shared.RequisitionLinkParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  requisitionLinkParams1?: shared.RequisitionLinkParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  requisitionLinkParams2?: shared.RequisitionLinkParams;
}


export class CreateAspspAuthorizationLinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateAspspAuthorizationLinkPathParams;

  @SpeakeasyMetadata()
  request: CreateAspspAuthorizationLinkRequests;
}


export class CreateAspspAuthorizationLinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  requisitionLinks?: shared.RequisitionLinks;

  @SpeakeasyMetadata()
  statusCode: number;
}
