import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNodeResourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetNodeResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNodeResourcePathParams;
}


export class GetNodeResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.BioObject })
  bioObjects?: shared.BioObject[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
