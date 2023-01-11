import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEntryInfoInfoEntryGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entry" })
  entry: string;
}


export class GetEntryInfoInfoEntryGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEntryInfoInfoEntryGetPathParams;
}


export class GetEntryInfoInfoEntryGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  entryInfoResponse?: shared.EntryInfoResponse;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
