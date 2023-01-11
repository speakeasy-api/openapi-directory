import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRemovebgRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  removeBgJson?: shared.RemoveBgJson;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  removeBgJson1?: shared.RemoveBgJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  removeBgMultipart?: shared.RemoveBgMultipart;
}


export class PostRemovebgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: PostRemovebgRequests;
}


export class PostRemovebgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  removeBgJsonResponse?: shared.RemoveBgJsonResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postRemovebg200ImageWildcardBinaryString?: Uint8Array;
}
