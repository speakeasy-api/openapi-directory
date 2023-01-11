import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOverRepresentationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=background" })
  background?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_p_value" })
  maxPValue?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_category" })
  objectCategory?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ontology" })
  ontology?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subject" })
  subject?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subject_category" })
  subjectCategory?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taxon" })
  taxon?: string;
}


export class GetOverRepresentationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOverRepresentationQueryParams;
}


export class GetOverRepresentationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
