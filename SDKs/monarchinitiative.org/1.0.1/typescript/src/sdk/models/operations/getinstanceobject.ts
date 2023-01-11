import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInstanceObjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstanceObjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor" })
  contributor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=title" })
  title?: string;
}


export class GetInstanceObjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInstanceObjectPathParams;

  @SpeakeasyMetadata()
  queryParams: GetInstanceObjectQueryParams;
}


export class GetInstanceObjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Association })
  associations?: shared.Association[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
