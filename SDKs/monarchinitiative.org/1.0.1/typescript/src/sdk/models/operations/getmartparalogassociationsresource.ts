import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMartParalogAssociationsResourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taxon1" })
  taxon1: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taxon2" })
  taxon2: string;
}


export class GetMartParalogAssociationsResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMartParalogAssociationsResourcePathParams;
}


export class GetMartParalogAssociationsResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
