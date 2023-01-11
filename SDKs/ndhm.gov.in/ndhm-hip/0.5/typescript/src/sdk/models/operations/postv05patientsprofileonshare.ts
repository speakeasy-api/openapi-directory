import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05PatientsProfileOnShareHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-CM-ID" })
  xCMID: string;
}


export class PostV05PatientsProfileOnShareRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXML: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  shareProfileResult?: shared.ShareProfileResult;
}


export class PostV05PatientsProfileOnShareRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05PatientsProfileOnShareHeaders;

  @SpeakeasyMetadata()
  request: PostV05PatientsProfileOnShareRequests;
}


export class PostV05PatientsProfileOnShareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
