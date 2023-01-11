import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostImproveRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  improvementProgramJson?: shared.ImprovementProgramJson;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  improvementProgramJson1?: shared.ImprovementProgramJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  improvementProgramMultipart?: shared.ImprovementProgramMultipart;
}


export class PostImproveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: PostImproveRequests;
}


export class PostImproveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
