import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInformationContentResourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object_category" })
  objectCategory: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subject_category" })
  subjectCategory: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subject_taxon" })
  subjectTaxon: string;
}


export class GetInformationContentResourceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=evidence" })
  evidence?: string;
}


export class GetInformationContentResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInformationContentResourcePathParams;

  @SpeakeasyMetadata()
  queryParams: GetInformationContentResourceQueryParams;
}


export class GetInformationContentResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
