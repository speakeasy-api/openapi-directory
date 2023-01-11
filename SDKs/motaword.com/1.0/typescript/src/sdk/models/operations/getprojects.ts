import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetProjectsOrderByEnum {
    Id = "id",
    Status = "status",
    Delivery = "delivery",
    Price = "price"
}


export class GetProjectsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_by" })
  orderBy?: GetProjectsOrderByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_type" })
  orderType?: shared.ListOrderTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status[]" })
  status?: shared.ProjectStatusEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=with_completed" })
  withCompleted?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=with_pending" })
  withPending?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=with_started" })
  withStarted?: boolean;
}


export class GetProjectsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetProjectsQueryParams;
}


export class GetProjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  projectList?: shared.ProjectList;

  @SpeakeasyMetadata()
  statusCode: number;
}
