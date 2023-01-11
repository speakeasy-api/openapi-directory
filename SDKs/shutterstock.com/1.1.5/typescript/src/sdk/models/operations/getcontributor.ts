import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetContributorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contributor_id" })
  contributorId: string;
}


export class GetContributorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;
}


export class GetContributorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContributorPathParams;

  @SpeakeasyMetadata()
  security: GetContributorSecurity;
}


export class GetContributorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  contributorProfile?: shared.ContributorProfile;

  @SpeakeasyMetadata()
  statusCode: number;
}
