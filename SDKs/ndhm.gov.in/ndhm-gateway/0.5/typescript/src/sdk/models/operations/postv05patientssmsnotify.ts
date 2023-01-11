import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05PatientsSmsNotifyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-CM-ID" })
  xCMID: string;
}


export class PostV05PatientsSmsNotifyRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXML: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patientSMSNotifcationRequest?: shared.PatientSmsNotifcationRequest;
}


export class PostV05PatientsSmsNotifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05PatientsSmsNotifyHeaders;

  @SpeakeasyMetadata()
  request: PostV05PatientsSmsNotifyRequests;
}


export class PostV05PatientsSmsNotifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
