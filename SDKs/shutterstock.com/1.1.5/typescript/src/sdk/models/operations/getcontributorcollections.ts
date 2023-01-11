import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetContributorCollectionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contributor_id" })
  contributorId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetContributorCollectionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;
}


export class GetContributorCollectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContributorCollectionsPathParams;

  @SpeakeasyMetadata()
  security: GetContributorCollectionsSecurity;
}


export class GetContributorCollectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collection?: shared.Collection;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
