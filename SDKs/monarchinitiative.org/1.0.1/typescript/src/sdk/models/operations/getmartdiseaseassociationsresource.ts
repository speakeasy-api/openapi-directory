import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMartDiseaseAssociationsResourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object_category" })
  objectCategory: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taxon" })
  taxon: string;
}


export class GetMartDiseaseAssociationsResourceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slim" })
  slim?: string[];
}


export class GetMartDiseaseAssociationsResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMartDiseaseAssociationsResourcePathParams;

  @SpeakeasyMetadata()
  queryParams: GetMartDiseaseAssociationsResourceQueryParams;
}


export class GetMartDiseaseAssociationsResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
