import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMartOrthologAssociationsResourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taxon1" })
  taxon1: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taxon2" })
  taxon2: string;
}


export class GetMartOrthologAssociationsResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMartOrthologAssociationsResourcePathParams;
}


export class GetMartOrthologAssociationsResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
