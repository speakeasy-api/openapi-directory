import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFeaturesWithinResourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=begin" })
  begin: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=build" })
  build: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=end" })
  end: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reference" })
  reference: string;
}


export class GetFeaturesWithinResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFeaturesWithinResourcePathParams;
}


export class GetFeaturesWithinResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.SequenceFeature })
  sequenceFeatures?: shared.SequenceFeature[];

  @SpeakeasyMetadata()
  statusCode: number;
}
