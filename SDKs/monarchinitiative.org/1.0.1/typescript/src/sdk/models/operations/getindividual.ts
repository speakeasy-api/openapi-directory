import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIndividualPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetIndividualRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIndividualPathParams;
}


export class GetIndividualResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Association })
  associations?: shared.Association[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
