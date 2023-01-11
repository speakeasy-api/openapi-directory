import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOfferingsOfferingIdUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facilitators" })
  facilitators?: shared.OfferingIdEnum1;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=learners" })
  learners?: shared.OfferingIdEnum1;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=markers" })
  markers?: shared.OfferingIdEnum1;
}


export class GetOfferingsOfferingIdUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOfferingsOfferingIdUsersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOfferingsOfferingIdUsersQueryParams;
}


export class GetOfferingsOfferingIdUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata({ elemType: shared.OfferingUserResponse })
  offeringUserResponses?: shared.OfferingUserResponse[];

  @SpeakeasyMetadata()
  statusCode: number;
}
