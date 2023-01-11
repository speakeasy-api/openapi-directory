import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PackageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=async" })
  async?: number;
}


export class PackageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackagePathParams;

  @SpeakeasyMetadata()
  queryParams: PackageQueryParams;
}


export class PackageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  package200ApplicationOctetStreamBinaryString?: Uint8Array;
}
