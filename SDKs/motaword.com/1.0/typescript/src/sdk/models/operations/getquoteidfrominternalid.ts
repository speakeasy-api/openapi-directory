import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetQuoteIdFromInternalIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: number;
}


export class GetQuoteIdFromInternalId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=internal-id" })
  internalId?: number;

  @SpeakeasyMetadata({ data: "json, name=public-id" })
  publicId?: number;
}


export class GetQuoteIdFromInternalIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetQuoteIdFromInternalIdPathParams;
}


export class GetQuoteIdFromInternalIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getQuoteIdFromInternalId200ApplicationJSONObject?: GetQuoteIdFromInternalId200ApplicationJson;
}
