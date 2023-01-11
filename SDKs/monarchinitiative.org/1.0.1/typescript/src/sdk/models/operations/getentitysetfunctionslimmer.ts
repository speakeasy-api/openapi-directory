import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetEntitySetFunctionSlimmerRelationshipTypeEnum {
    InvolvedIn = "involved_in",
    ActsUpstreamOfOrWithin = "acts_upstream_of_or_within"
}


export class GetEntitySetFunctionSlimmerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_automatic_assertions" })
  excludeAutomaticAssertions?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=relationship_type" })
  relationshipType?: GetEntitySetFunctionSlimmerRelationshipTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rows" })
  rows?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slim" })
  slim: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subject" })
  subject: string[];
}


export class GetEntitySetFunctionSlimmerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEntitySetFunctionSlimmerQueryParams;
}


export class GetEntitySetFunctionSlimmerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
