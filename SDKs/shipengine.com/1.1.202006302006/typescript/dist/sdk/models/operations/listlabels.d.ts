import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListLabelsSortByEnum {
    ModifiedAt = "modified_at",
    CreatedAt = "created_at"
}
export declare class ListLabelsQueryParams extends SpeakeasyBase {
    batchId?: string;
    carrierId?: string;
    createdAtEnd?: Date;
    createdAtStart?: Date;
    labelStatus?: shared.LabelStatusEnum;
    page?: number;
    pageSize?: number;
    rateId?: string;
    serviceCode?: string;
    shipmentId?: string;
    sortBy?: ListLabelsSortByEnum;
    sortDir?: Record<string, any>;
    trackingNumber?: string;
    warehouseId?: string;
}
export declare class ListLabelsRequest extends SpeakeasyBase {
    queryParams: ListLabelsQueryParams;
}
export declare class ListLabelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    listLabelsResponseBody?: Record<string, any>;
}
