import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListManifestsQueryParams extends SpeakeasyBase {
    carrierId?: string;
    createdAtEnd?: Date;
    createdAtStart?: Date;
    labelIds?: string[];
    page?: number;
    pageSize?: number;
    shipDateEnd?: Date;
    shipDateStart?: Date;
    warehouseId?: string;
}
export declare class ListManifestsRequest extends SpeakeasyBase {
    queryParams: ListManifestsQueryParams;
}
export declare class ListManifestsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    listManifestsResponseBody?: shared.ListManifestsResponseBody;
}
