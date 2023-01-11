import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PairwithSpeakerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PairwithSpeakerRequest;
}


export class PairwithSpeakerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pairwithSpeaker200TextPlainObject?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
